import React, { useState, useEffect } from "react";
import { Form } from "./Components/Form";

export const App = () => {
  const [reviews, setReviews] = useState([]);

  const getReviewInfo = (info) => {
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
      <ul>
        <li className="list-name">{item.name}</li>
        <li>{item.textarea}</li>
      </ul>
    ));

  return (
    <div className="main">
      <h2>Отзывы</h2>
      {commentsList}
      <Form getReviewInfo={getReviewInfo} />
    </div>
  );
};
