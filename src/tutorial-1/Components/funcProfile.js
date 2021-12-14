import React from 'react';

const funcProfile = ({name,registredAt}) => {

  const registrationData = (data) => (
    data.toLocaleString("ru", {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  )

  return (
    <div>
        <p>Привет, <b>{name.split(' ').splice(0,1).join()}!</b></p>
        <p>Дата регистрации: {registrationData(registredAt)}</p>
    </div>
  )
};

export default funcProfile;
