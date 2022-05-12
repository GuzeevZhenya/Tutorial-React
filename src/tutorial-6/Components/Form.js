import React from "react";
import { useState } from "react";
import "./Form.css";

export const Form = ({ getReviewInfo }) => {
  // const [reviews, setReview] = useState([]);
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [textarea, setTextarea] = useState();

  // const setComments = (e) => {
  //   e.preventDefault();
  //   const getDate = new Date().toLocaleString();
  //   const comments = {
  //     name,
  //     email,
  //     textarea,
  //     getDate,
  //   };
  //   getReviewInfo(comments);
  //   e.currentTarget.reset();
  // };

  const [fields, setFields] = React.useState({
    email: "",
    text: "",
    fullName: "",
  });

  const setComments = (e) => {
    e.preventDefault();
     getReviewInfo(fields)
  };

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // setFields({
    //   [name]: value,
    // });
    setFields((prev) => {
      return { ...prev, [name]: value };
    });
    
  };

  return (
    <form onSubmit={setComments} clasFsName="form">
      <h1>Обратная связь</h1>
      <input
        placeholder="Имя"
        onChange={(event) => handleChangeInput(event)}
        name="fullName"
        value={fields.name}
      />
      <input
        placeholder="Почта"
        onChange={(event) => handleChangeInput(event)}
        name="email"
        value={fields.email}
      />
      <textarea
        placeholder="Текст"
        onChange={(event) => handleChangeInput(event)}
        name="text"
        value={fields.textarea}
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
};
