import React from 'react';
import Header from '../Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/shop'>
						<Shop />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
