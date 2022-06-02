import React,{useEffect} from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useParams, Navigate, useNavigate} from "react-router-dom";
import { posts } from "../pages/Home";

export const FullPost = () => {
  let params = useParams();
  

  const post = posts.find((obj) => obj.id === Number(params.id));

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt="Article" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
