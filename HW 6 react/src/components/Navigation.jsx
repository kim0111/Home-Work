import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/Auth";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    }
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                {
                    isAuth && <button onClick={logout}>Выйти</button>
                }
            </nav>
        </div>
    );
};

export default Navigation;