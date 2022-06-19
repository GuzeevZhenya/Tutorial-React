import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().min(2, "Слишком короткое имя").required(),
    lastName: yup.string().min(3, "Слишком короткая Фамилия").required(),
    email: yup.string().email("Неверная почта").required("Укажите почту"),
    // password: yup.string().when("email", {
    //   is: (value) => value.includes("@"), //Если в email есть @, то выполняем действие ниже
    //   then: yup
    password: yup
      .string()
      .min(6, "Пароль не должен быть не менее 6 символов")
      .max(32, "Пароль должен быть не более 32 символов"),
  })
  .required();

export const PersonalInfoForm = ({ nextStep, setFormValues }) => {
  const { register, handleSubmit, errors, resetField, reset, formState } =
    useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    setFormValues(values);
    nextStep("adress");
  };
  const handleClickClear = () => reset();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="firstName"
        id="standard-basic"
        label="Имя"
        {...register("firstName")}
        helperText={
          formState.errors.firstName && formState.errors.firstName.message
        }
        error={!!formState.errors.firstName}
        variant="standard"
      />
      <TextField
        name="lastName"
        id="standard-basic"
        label="Фамилия"
        variant="standard"
        {...register("lastName")}
        helperText={
          formState.errors.lastName && formState.errors.lastName.message
        }
        error={!!formState.errors.lastName}
      />
      <TextField
        name="email"
        id="standard-basic"
        label="E-Mail"
        variant="standard"
        {...register("email")}
        helperText={formState.errors.email && formState.errors.email.message}
        error={!!formState.errors.email}
      />
      <TextField
        name="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        {...register("password")}
        helperText={
          formState.errors.password && formState.errors.password.message
        }
        error={!!formState.errors.password}
      />
      <div className="row button">
        <Button onClick={handleSubmit(handleClickClear)}>Очистить</Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Далее
        </Button>
      </div>
    </form>
  );
};
