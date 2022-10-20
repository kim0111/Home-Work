import Error from "../pages/Error";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Login from "../pages/Login";
import QueryPosts from "../pages/QueryPosts";

export const publicRoutes = [
    {path: "/login", component: <Login />, exact: false},
]

export const privateRoutes = [
    {path: "/home", component: <Home/>, exact: true},
    {path: "/posts", component: <QueryPosts/>, exact: false},
    {path: "/posts/:id", component: <Post/>, exact: false}
]