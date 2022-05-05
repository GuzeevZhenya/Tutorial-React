import React from "react";
import { useState } from "react";

export const Form = ({ getReviewInfo }) => {
  const [reviews, setReview] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [textarea, setTextarea] = useState();

  const setComments = (e) => {
    const comments = {
      name,
      email,
      textarea,
    };
    setReview([...reviews, comments]);
    if (reviews.length > 0) {
      getReviewInfo(reviews);
    }
  };

  return (
    <div>
      <h1>Обратная связь</h1>
      <input
        placeholder="Имя"
        onChange={(event) => setName(event.target.value)}
        name="name"
        value={reviews.name}
      />
      <input
        placeholder="Почта"
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        value={reviews.email}
      />
      <textarea
        placeholder="Текс"
        onChange={(event) => setTextarea(event.target.value)}
        name="textarea"
        value={reviews.textarea}
      ></textarea>
      <button onClick={setComments}>Отправить</button>
    </div>
  );
};
