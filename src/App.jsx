import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import DetailContainer from './containers/DetailProductContainer';
import { CartProvider } from './context/CartContext';

function App() {
	return (
		<div className='App'>
			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
				crossOrigin='anonymous'
			></link>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
				crossOrigin='anonymous'
			></script>
			<BrowserRouter>
				<CartProvider>
					<Switch>
						<Route exact path='/' component={HomeContainer} />
						<Route exact path='/products' component={ProductsContainer} />
						<Route exact path='/detail/:id' component={DetailContainer} />
					</Switch>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
