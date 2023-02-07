import React from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "../components/Page/Homepage";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import Login from "../components/Page/Login";
import Category from "../components/Page/Category";
import Detail from "../components/Page/Detail";
import Watching from "../components/Page/Watching";
import Register from "../components/Page/Register";
import Blog from "../components/Page/Blog";
import BlogDetails from "../components/Page/BlogDetails";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                    <Slider/>
                    <Homepage/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/categories" element={
                <>
                    <Header/>
                    <Category/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/anime-details" element={
                <>
                    <Header/>
                    <Detail/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/anime-watching" element={
                <>
                    <Header/>
                    <Watching/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/blog" element={
                <>
                    <Header/>
                    <Blog/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/blog-details" element={
                <>
                    <Header/>
                    <BlogDetails/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/login" element={
                <>
                    <Header/>
                    <Login/>
                    <Footer/>
                </>
            }
            ></Route>

            <Route path="/register" element={
                <>
                    <Header/>
                    <Register/>
                    <Footer/>
                </>
            }
            ></Route>

        </Routes>
    );
};

export default AllRoutes;