import axios from "axios";
import React, { useState } from "react";

export const Github = () => {
  const [searchingGit, setSearchingGit] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const findUser = async () => {
    try {
      setLoading(true);
      const API = `https://api.github.com/users/${searchingGit}`;
      const res = await axios.get(API);
      setLoading(false);
      setUser(res.data);
      setError(false);
    } catch (error) {
      setLoading(false);
      setUser(null);
      setError(true);
    }
  };

  // const setQueryParams = () => {
  //   window.history.pushState(
  //     { login: searchingGit },
  //     "",
  //     `/?login=${searchingGit}`
  //   );
  // };

  console.log(user);
  return (
    <div id="app">
      <div className="app-container">
        <div className="app-form">
          <input
            onChange={(e) => setSearchingGit(e.target.value)}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            className="app-form_btn"
            disabled={loading}
            onClick={() => findUser()}
          >
            Найти
          </button>
        </div>
        {loading && <div>Загрузка...</div>}
        {user ? (
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img src={user.avatar_url} alt="avatar" />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  {user.name}
                  <span>@{user.login}</span>
                </h1>
                <p className="app-user_about">{user.bio}</p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                Репозитории
                <span>{user.public_repos}</span>
              </li>
              <li className="app-user_stats-item">
                Подписчиков
                <span>{user.followers}</span>
              </li>
              <li className="app-user_stats-item">
                Звёзд
                <span>{user.followers}</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">{user.location}</li>
              <li className="app-user_location-item">
                <a href={user?.blog}>{user.blog}</a>
              </li>
            </ul>
          </div>
        ) : null}

        {error && <h2>Пользователь не найден</h2>}
      </div>
    </div>
  );
};
