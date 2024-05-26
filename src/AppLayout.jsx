export const AppLayout = ({
	emailError,
	submitButtonRef,
	isFormValid,
	passwordError,
	confirmPasswordError,
	onSubmit,
	onEmailChange,
	onPasswordChange,
	onPasswordBlur,
	onConfirmPasswordChange,
}) => {
	return (
		<div className="App">
			<form onSubmit={onSubmit}>
				<div className="container">
					<label className="signup">Create Account</label>
					<input
						className="input"
						name="email"
						type="email"
						placeholder="Email"
						onBlur={onEmailChange}
					></input>
					<div className="error">{emailError}</div>
					<input
						className="input"
						name="password"
						type="password"
						placeholder="Create a password"
						onChange={onPasswordChange}
						onBlur={onPasswordBlur}
					></input>
					{passwordError && <div className="error">{passwordError}</div>}
					<input
						className="input"
						name="confirmPassword"
						type="password"
						placeholder="Confirm your password"
						onChange={onConfirmPasswordChange}
					></input>
					<div className="error">{confirmPasswordError}</div>
					<button
						ref={submitButtonRef}
						type="submit"
						className="submit"
						style={{ border: isFormValid ? '1px solid black' : 'none' }}
						disabled={!isFormValid}
					>
						Signup
					</button>
				</div>
			</form>
		</div>
	);
};
