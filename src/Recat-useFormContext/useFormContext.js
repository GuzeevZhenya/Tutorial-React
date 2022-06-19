import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PersonalInfoForm } from "./PersonalInfoForm";
const schema = yup
  .object({
    firstName: yup.string().min(2, "Слишком короткое имя").required(),
    lastName: yup.string().min(3, "Слишком короткая Фамилия").required(),
    email: yup.string().email("Неверная почта").required("Укажите почту"),
  })
  .required();

export const UseFormContext = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <PersonalInfoForm register={register} formState={formState} />
      <Button onClick={handleSubmit(onSubmit)}>Далее</Button>
    </div>
  );
};
