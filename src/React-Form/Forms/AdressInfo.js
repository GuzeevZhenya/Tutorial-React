import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Prev } from "react-bootstrap/esm/PageItem";

const schema = yup
  .object({
    city: yup.string().required("Укажите город"),
    street: yup.string().required("Укажите улицу"),
    appartment: yup.number("Должен быть числом").required("Укажите квартиру"),
  })
  .required();

export const AdressForm = ({ setFormValues, nextStep }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      city: "",
      street: "",
      appartment: 0,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    setFormValues((prev) => {
      return { ...prev, ...values };
    });

    nextStep("result");
  };
  // const handleClickClear = () => reset();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="city"
        id="standard-basic"
        label="Город"
        {...register("city")}
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
        fullWidth
      />
      <TextField
        name="street"
        id="standard-basic"
        label="Улица"
        {...register("street")}
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
        fullWidth
      />
      <TextField
        name="appartment"
        id="standard-basic"
        label="Квартира"
        {...register("appartment")}
        helperText={
          formState.errors.appartment && formState.errors.appartment.message
        }
        error={!!formState.errors.appartment}
        fullWidth
      />
      <div className="row button">
        {/* <Button onClick={handleSubmit(handleClickClear)}>Очистить</Button> */}
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Далее
        </Button>
      </div>
    </form>
  );
};
