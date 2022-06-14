import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

export const ReactForm = () => {
	const { register, handleSubmit, errors, resetField, reset, formState } = useForm({resolver:yupResolver});


	const onSubmit = (values) => {
		console.log(values);
		// handleClickClear();
	};
	const handleClickClear = () => reset();

	const schema = yup
		.object({
			firstName: yup.string().required(),
		})
		.required();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				name="firstName"
				id="standard-basic"
				label="Standard"
				{...register('firstName')}
				helperText={formState.errors.firstName && formState.errors.firstName.message}
				error={!!formState.errors.firstName}
				variant="standard"
			/>
			<TextField
				name="lastName"
				id="standard-basic"
				label="Standard"
				variant="standard"
				{...register('lastName', {
					// validate: (value) => value !== "admin" || "Nice try!",
					required: 'Это обязательное поле!',
				})}
				helperText={formState.errors.lastName && formState.errors.lastName.message}
				error={!!formState.errors.lastName}
			/>
			<TextField
				name="email"
				id="standard-basic"
				label="Standard"
				variant="standard"
				{...register('email', {
					// validate: (value) => value !== "admin" || "Nice try!",
					required: 'Это обязательное поле!',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'invalid email address',
					},
				})}
				helperText={formState.errors.email && formState.errors.email.message}
				error={!!formState.errors.email}
			/>
			<TextField
				name="password"
				id="standard-basic"
				label="Standard"
				variant="standard"
				{...register('password', {
					// validate: (value) => value !== "admin" || "Nice try!",
					required: 'Это обязательное поле!',
				})}
				helperText={formState.errors.password && formState.errors.password.message}
				error={!!formState.errors.password}
			/>
			<Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
			<Button onClick={handleSubmit(handleClickClear)}>Зарегистрироваться</Button>
		</form>
	);
};
