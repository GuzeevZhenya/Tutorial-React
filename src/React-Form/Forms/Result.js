import React from "react";
import { Paper } from "@mui/material";

export const Result = ({ formValues }) => {
  return (
    <Paper style={{ padding: 30 }}>
      <h2>Персональная информация:</h2>
      <ul>
        <li>
          <b>Имя:{formValues.firstName} </b>
        </li>
        <li>
          <b>Фамилия:{formValues.lastName} </b>
        </li>
        <li>
          <b>Почта:{formValues.lastName} </b>
        </li>
        <li>
          <b>Пароль:{formValues.lastName} </b>
        </li>
        <hr />
        <h2>Адрес</h2>
        <li>
          <b>Город:{formValues.city} </b>
        </li>
        <li>
          <b>Улица:{formValues.street} </b>
        </li>
        <li>
          <b>Квартира:{formValues.appartment} </b>
        </li>
      </ul>
    </Paper>
  );
};
