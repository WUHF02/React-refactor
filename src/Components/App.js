import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop/Shop';
import { ColorContext, colors } from './Utility';

function App() {
	return (
		<Router>
			<div className='App'>
				<ColorContext.Provider value={colors}>
					<Header />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/shop'>
							<Shop />
						</Route>
					</Switch>
					<Footer />
				</ColorContext.Provider>
			</div>
		</Router>
	);
}

export default App;
