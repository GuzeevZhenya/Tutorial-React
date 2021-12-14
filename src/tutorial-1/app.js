import React from 'react';
import FuncProfile from './Components/funcProfile';
import Classprofile from './Components/classProfile';

export default function app() {
  return (
    <div>
          <FuncProfile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
          <Classprofile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}
