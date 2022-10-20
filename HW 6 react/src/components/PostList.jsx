import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, remove, toggle}) => {
    return (
        <div>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition timeout={500} key={post.id} classNames="post">
                        <PostItem toggle={toggle} post={post} index={index+1} remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;