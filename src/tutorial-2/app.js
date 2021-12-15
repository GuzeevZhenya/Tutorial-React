import React from 'react';

export const App = () => {
  let email = '';
  let password = '';

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      email = e.target.value;
    }

    if (e.target.name === 'password') {
      password = e.target.value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Вы не заполнили поля');
    } else {
      console.log({ email, password });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} name="email" type="text" placeholder="E-Mail" />
        <input onChange={handleChange} name="password" type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
