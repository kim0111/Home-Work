import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import PostService from "../api/PostService";
import Pagination from "../components/Pagination";

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);

    const [fetchPost, isPostLoaded, postError] = useFetch(async () => {
        const post = await PostService.getPost(params.id);
        setPost(post);
    })

    const [fetchComments, isCommentsLoaded, commentError] = useFetch(async () => {
        const response = await PostService.getComments(params.id, limit, page);
        setComments(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(Math.ceil(totalCount / limit));
        console.log(totalCount, totalPages, limit);
    })

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [page]);

    return (
        <div>
        {
            isPostLoaded ?
                <div className="post-item">
                    <div>
                        <p><b>{post.id}</b> {post.title}</p>
                        <p>{post.body}</p>
                    </div>
                </div>
                : <p>Loading...</p>
        }
            {
                isCommentsLoaded ?
                    <div>
                        {
                            comments.map((c) =>
                                <div>
                                    <h3>{c.email}</h3>
                                    <p>{c.name}</p>
                                    <p>{c.body}</p>
                                </div>
                            )
                        }
                    </div>
                    : <p>Loading...</p>
            }
            <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </div>
    );
};

export default Post;