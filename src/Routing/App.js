import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullPost } from "./components/FullArticle";
import { NotFound } from "./pages/NotFoud";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  // const pathname = window.location.pathname;
  // const postId = pathname.split("/post/")[1];
  // console.log(postId);

  return (
    <>
      <Header />
      {/* {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {pathname === `/post/${postId}` && <FullPost postId={postId} />}
      ДОПИСАТЬ РОУТ НА СТАТЬЮ */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Home />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
