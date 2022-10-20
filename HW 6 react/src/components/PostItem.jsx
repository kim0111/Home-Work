import React from 'react';
import {Link} from "react-router-dom";

const PostItem = ({post, index, remove, toggle}) => {

    const removePost = () => {
        remove(post);
    }

    const togglePost = () => {
        toggle(post.id);
    }

    return (
        <Link to={`/posts/${post.id}`}>
            <div className="post-item">
                <div>
                    <p><b>{post.id}</b> {post.title}</p>
                    <p>{post.body}</p>
                </div>
                <button onClick={togglePost}>{post.done ? "Done" : "Undone"}</button>
                <button onClick={removePost}>Удалить</button>
            </div>
        </Link>
    );
};

export default PostItem;