import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { posts } from "../pages/Home";

export const FullPost = () => {
  let params = useParams();

  const post = posts.find((obj) => obj.id === Number(params.id));
  console.log(post);
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
