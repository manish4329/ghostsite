import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
	return (
		<Formik
			style={{
				display: 'flex',
				flexDirection: 'coloum',
			}}
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Invalid email address')
					.required('Required'),
				password: Yup.string('Enter your password')
					.min(8, 'Password should be of minimum 8 characters length')
					.required('Password is required'),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form>
				<label htmlFor="email">Email Address</label>
				<Field name="email" type="email" />
				<ErrorMessage name="email" />

				<label htmlFor="password">Password</label>
				<Field name="password" type="password" />
				<ErrorMessage name="password" />

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default SignInForm;
