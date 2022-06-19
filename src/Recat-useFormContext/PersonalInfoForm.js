import React from "react";
import TextField from "@mui/material/TextField";

export const PersonalInfoForm = ({ formState, register }) => {
  return (
    <div>
      <div className="row">
        <TextField
          {...register("firstName")}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          name="firstName"
          label="Имя"
          fullWidth
        />
        <TextField
          {...register("lastName")}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          name="lastName"
          label="Имя"
          fullWidth
        />
        <TextField
          {...register("email")}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="Имя"
          fullWidth
        />
      </div>
    </div>
  );
};
