import React from 'react';
import SignInForm from './SignInForm';
import SportsBasketball from '@mui/icons-material/SportsBasketball';
import '../App.css';

const SignIn = () => {
	return (
		<div className="SignIn">
			<div className="SignInlogo">
				<img src="./ghost.png" alt="ghost" height="50px" width="70px" />
				<a href="./SignUp.js">
					No account?
					<br />
					Sign up
				</a>
			</div>
			<h1>Sign in</h1>
			<div className="googleSignIn">
				<button className="googleBtn">
					<h2>G</h2>Sign in with Google
				</button>
				<button className="ballBtn">
					<SportsBasketball />
				</button>
			</div>
			<SignInForm />
		</div>
	);
};

export default SignIn;
