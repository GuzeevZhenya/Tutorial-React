import React, { useState } from "react";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [fields, setFields] = useState({
    email: "",
    name: "",
  });

  const [image, setImage] = useState();
  const [uploading, setUploading] = useState(false);

  const handleChangeInput = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const getUsers = () => {s
  //   fetch('https://62b04e1fb0a980a2ef4fe953.mockapi.io/users').then((data) => {
  //     data.json().then((result) => {
  //       setUsers(result)
  //     })
  //   })
  // }

  //Получение данных с сервера
  const getUsers = async () => {
    // try {
    //   const resp = await fetch(
    //     "https://62b04e1fb0a980a2ef4fe953.mockapi.io/users"
    //   );
    //   const data = await resp.json();
    //   setUsers(data);
    // } catch (err) {
    //   alert(err);
    // }

    // axios.get('https://62b04e1fb0a980a2ef4fe953.mockapi.io/users').then(res=>{
    //   setUsers(res.data)
    // })

    const res = await axios.get(
      "https://62b04e1fb0a980a2ef4fe953.mockapi.io/users"
    );
    setUsers(res.data);
  };

  //Добавление данных на сервер
  const createUser = () => {
    // fetch("https://62b04e1fb0a980a2ef4fe953.mockapi.io/users", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(fields),
    // });

    axios.post("https://62b04e1fb0a980a2ef4fe953.mockapi.io/users", fields);
  };

  const uploadFile = async (e) => {
    const file = image[0];
    console.log(file);
    setUploading(true);
    const formData = new FormData();

    console.log(formData);
    formData.append("file", file);
    await axios.post("http://localhost:9999", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setUploading(false);
  };

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => getUsers()}>Show users</button>
      <hr />
      <div>
        <h4>Создать пользователя:</h4>
        <input
          onChange={(event) => handleChangeInput(event)}
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => handleChangeInput(event)}
          name="name"
          id="username"
          placeholder="Имя"
        />
        <button onClick={() => createUser()}>Отправить</button>
        <hr />
        <hr />
        <hr />
        <div>
          <h4>Загрузка файла:</h4>
          <input
            onChange={(e) => setImage(e.target.files)}
            id="file"
            type="file"
          />
          <button onClick={uploadFile} disabled={uploading}>
            Загрузить
          </button>
          <p>
            <b>Идет загрузка....</b>
          </p>
        </div>
      </div>
    </div>
  );
};
