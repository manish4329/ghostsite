import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<div className="App">
			<div className="Main">
				<div className="Navbar">
					<NavBar />
				</div>
				<div className="Body">
					<Home />
				</div>
			</div>
		</div>
	);
};

export default App;
