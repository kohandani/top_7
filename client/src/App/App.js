import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/SidebarHome";
import Topbar from "../components/topbar/Topbar";
import ProfileBar from "../components/profileBar/ProfileBar";
import useStyle from "./Styels";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "../pages/Home/Home";
import List from "../pages/List/List";
import NotFound from "../pages/NotFound/NotFound";
import SinglePage from "../pages/SinglePage/SinglePage";
import Login from "../pages/Login/Login";
import EditProfile from "../pages/EditProfile/EditProfile";
import Admin from "../pages/Admin/Admin";
import { useState } from "react";
import decode from "jwt-decode";

const THEME = createTheme({
    typography: {
        fontFamily: "iransans",
    },
});

const App = () => {
    const classes = useStyle();
    const [user, setUser] = useState();
    const location = useLocation();
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) setUser(null);
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <>
            <ThemeProvider theme={THEME}>
                <Topbar />
                <ProfileBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/list/:id" element={<List />} />
                            <Route path="/item/:id" element={<SinglePage />} />
                            <Route
                                path="/admin"
                                element={
                                    user?.result.isAdmin ? (
                                        <Admin />
                                    ) : (
                                        <Navigate to="/" />
                                    )
                                }
                            />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/users/editProfile/:id"
                                element={
                                    user ? <EditProfile /> : <Navigate to="/" />
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
