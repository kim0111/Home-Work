import {useEffect, useRef, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import PostService from "../api/PostService";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import Modal from "../UI/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";


function Posts() {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [totalPages, setTotalPages] = useState(10);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const interEl = useRef();
    const observer = useRef();
    const [loaded, setLoaded] = useState(false);

    const [fetchPosts, isPostLoaded, postError] = useFetch(async () => {
        const response = await PostService.getPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"]; // 100
        setTotalPages(Math.ceil(totalCount / limit)); // 100 / 10 = 10
    })

    useEffect(() => {
        if (loaded) {
            setPage(page+1);
            setLoaded(false);
            console.log(page);
        }
    }, [loaded])

    useEffect(() => {
        if (!isPostLoaded) return;
        if (observer.current) observer.current.disconnect();

        const callback = (entries) => {
            if (entries[0].isIntersecting && page < totalPages) {
                console.log("пересекло");
                // setPage(page+1);
                // console.log(page);
                setLoaded(true);
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(interEl.current);
    }, [isPostLoaded])

    useEffect(() => {
        fetchPosts();
    }, [page, limit])



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
            <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="-1">Показать все</option>
            </select>
            <PostList toggle={toggle} posts={sortedAndSearchedPosts} remove={removePost} />
            {
                !isPostLoaded &&
                <div>Loading...</div>
            }
            <div ref={interEl} style={{width: "100%", height: "1px", backgroundColor: "green"}} />
            {
                postError &&
                <h1>Произошла ошибка {postError}</h1>
            }
            <Pagination totalPages={totalPages} setPage={setPage} page={page}/>
        </div>
    );
}

export default Posts;