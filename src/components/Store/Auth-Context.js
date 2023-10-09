import React, { useState, useEffect } from "react";

const AuthContext =React.createContext({
    isLoggedIn: false,
onLogout: () => {},
onLogin: (email, password) => {}

});

export const AuthContextProvider =(props) => {
    const [isLoggedIn, setIsloggedIn] = useState (false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedin')
    });
const logoutHandler =() => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
};
const loginHandler =() => {
    localStorage.setItem('isLoggedIn', 1);
    setIsloggedIn(true);
};
    return <AuthContext.Provider value {}>{props.children}</AuthContext.Provider>
};
export default AuthContext;