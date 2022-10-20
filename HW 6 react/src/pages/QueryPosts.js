import {useEffect, useMemo, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import PostService from "../api/PostService";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import Modal from "../UI/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import QueryPagination from "../components/QueryPagination";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

function QueryPosts() {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [posts, setPosts] = useState([]);

    const useQuery = () => {
        const {search} = useLocation();
        const params = useMemo(() => new URLSearchParams(search), [search]);
        const page_from_url = params.get("page");
        console.log(page_from_url);
        return page_from_url;
    }

    const queryPage = useQuery();
    console.log("this", queryPage);

    useEffect(() => {
        fetchPosts();
    }, [queryPage])

    const [fetchPosts, isPostsLoaded, postsError] = useFetch(async () => {
        const response = await PostService.getPosts(limit, queryPage);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"]; // 100
        setTotalPages(Math.ceil(totalCount / limit)); // 100 / 10 = 10
        console.log("fetching");
    })

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const toggle = (id) => {
        setPosts([...posts].map((post) => post.id === id ? {...post, done: !post.done} : {...post}));
    }

    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);

    const changeVisible = () => {
        setVisible(!visible);
        console.log(visible);
    }

    return (
        <div className="App">
            <Modal visible={visible} setVisible={setVisible}>
                <PostForm add={addPost} />
            </Modal>
            <button onClick={changeVisible}>Добавить пост</button>
            <PostFilter setFilter={setFilter} filter={filter}/>
            {
                isPostsLoaded
                    ? <PostList toggle={toggle} posts={sortedAndSearchedPosts} remove={removePost} />
                    : <div>Loading...</div>
            }
            {
                postsError &&
                <h1>Произошла ошибка {postsError}</h1>
            }
            <QueryPagination totalPages={totalPages} />
        </div>
    );
}

export default QueryPosts;