import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import {FullPost} from './components/FullArticle';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const pathname = window.location.pathname;
  const postId = pathname.split("/")[2];
  console.log(postId)

  console.log(pathname)

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {pathname === `/post/${postId}`&& <FullPost postId={postId}/>}
      {/* ДОПИСАТЬ РОУТ НА СТАТЬЮ */}
      <Footer />
    </>
  ); 
}

export default App;
