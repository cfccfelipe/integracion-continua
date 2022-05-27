import NavBarComponent from '../components/NavBarComponent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const HomeContainer = () => {
	const { carrito } = useContext(CartContext);
	return (
		<div className='container'>
			<div className='row'>
				<h1>Bienvenido a tu catalogo virtual</h1>
				<h2>Tu carrito tiene {carrito.length} productos</h2>
			</div>
			<div className='row'>
				<Link to={'/productos'}>
					<button className='btn btn-primary'>Ver los productos</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeContainer;
