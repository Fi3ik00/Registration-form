import './App.css';
import { AppLayout } from './AppLayout';
import { useState, useRef, useEffect } from 'react';

export const App = () => {
	const [value, setValue] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);
	const [emailError, setEmailError] = useState(null);

	const submitButtonRef = useRef(null);

	const isFormValid =
		value.email &&
		value.password &&
		value.confirmPassword &&
		!passwordError &&
		!confirmPasswordError &&
		!emailError;

	useEffect(() => {
		if (isFormValid) {
			submitButtonRef.current.focus();
		}
	}, [isFormValid]);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(value);
	};

	const onEmailChange = ({ target }) => {
		setValue({ ...value, email: target.value });
		let emailError = null;

		if (!target.value) {
			emailError = null;
		} else if (!/.+@.+\..+/i.test(target.value)) {
			emailError = 'Email должен выглядеть так: example@example.com';
		} else {
			emailError = null;
		}

		setEmailError(emailError);
	};

	const onPasswordChange = ({ target }) => {
		setValue({ ...value, password: target.value });

		let errorPassword = null;

		if (!/^[\w+=!?а-яА-ЯёЁ-]*$/.test(target.value)) {
			errorPassword =
				'Некорректный пароль. Допустимые символы: буквы, цифры, нижнее подчёркивание';
		} else if (target.value.length > 20) {
			errorPassword = 'Пароль не должен превышать 20 символов';
		}

		setPasswordError(errorPassword);
	};

	const onPasswordBlur = () => {
		if (value.password.length === 0) {
			setPasswordError(null);
		} else if (value.password.length < 8) {
			setPasswordError('Пароль должен содержать минимум 8 символов');
		}
	};

	const onConfirmPasswordChange = ({ target }) => {
		let newPassword = target.value;
		setValue({ ...value, confirmPassword: newPassword });
		let errorConfirmPassword = null;

		if (newPassword.length === 0) {
			errorConfirmPassword = null;
		} else if (newPassword !== value.password) {
			errorConfirmPassword = 'Пароли не совпадают';
		}

		setConfirmPasswordError(errorConfirmPassword);
	};

	return (
		<AppLayout
			emailError={emailError}
			submitButtonRef={submitButtonRef}
			isFormValid={isFormValid}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
			onSubmit={onSubmit}
			onEmailChange={onEmailChange}
			onPasswordChange={onPasswordChange}
			onPasswordBlur={onPasswordBlur}
			onConfirmPasswordChange={onConfirmPasswordChange}
		></AppLayout>
	);
};
