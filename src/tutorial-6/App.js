import React, { useState, useEffect } from "react";
import { Form } from "./Components/Form";

export const App = () => {
  const [reviews, setReviews] = useState([]);

  const getReviewInfo = (info) => {
    console.log(reviews);
    setReviews([...reviews, info]);
  };

  useEffect(() => {
    const initialComments = JSON.parse(localStorage.getItem("comments"));
    setReviews(initialComments ? initialComments : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(reviews));
  }, [reviews]);

  const commentsList =
    reviews &&
    reviews.map((item) => (
      <>
        <li className="list-name">{item.fullName}</li>
        <li>{item.text}</li>
      </>
    ));

  return (
    <div className="main">
      <h2>Отзывы</h2>
      <ul>{commentsList}</ul>
      <Form getReviewInfo={getReviewInfo} />
    </div>
  );
};
