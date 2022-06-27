import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import DetailContainer from './containers/DetailProductContainer';
import { CartProvider } from './context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { addElementToCart } from './redux/actions/cart';
import CartContainer from './containers/CartContainer';
import AdvanceSearch from './containers/AdvanceSearch';
import ProductsCategory from './containers/ProductsCategory';
import LogIn from './containers/LogIn';
import Register from './containers/Register';

const App = () => {
	const STATE = useSelector((state) => state.cartReducer);
	const dispatch = useDispatch();
	console.log(STATE);
	return (
		<div className='App'>
			{/* <button
				onClick={() => {
					dispatch(addElementToCart({ id: 1, name: 'shirt', price: 3000 }));
				}}
			>
				Agregar al carrito
			</button> */}
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
						<Route exact path='/home' component={HomeContainer} />
						<Route exact path='/' component={LogIn} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/productos' component={ProductsContainer} />
						<Route exact path='/detalle/:id' component={DetailContainer} />
						<Route exact path='/search' component={AdvanceSearch} />
						<Route exact path='/search/:id' component={ProductsCategory} />
						<Route exact path='/carrito' component={CartContainer} />
						<Route
							path='/productos/:busqueda'
							component={ProductsContainer}
						></Route>
					</Switch>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
