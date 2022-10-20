import React, {useContext} from 'react';
import {AuthContext} from "../context/Auth";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }
    return (
        <div>
            <form>
                <input type="text"/>
                <button onClick={login}>Войти</button>
            </form>
        </div>
    );
};

export default Login;