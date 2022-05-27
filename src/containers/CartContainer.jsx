import NavBarComponent from '../components/NavBarComponent';
import { lazy, useContext, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const CartComponent = lazy(() => import('../components/CartComponent'));

const CartContainer = () => {
	const { carrito } = useContext(CartContext);
	let precio = 0;
	for (let i = 0; i < carrito.length; i++) {
		precio = precio + carrito[i].price;
	}

	return (
		<div className='container'>
			<div className='row'></div>
			<div className='row'>
				<h1>Estos son tus productos</h1>
				<h2>Tu carrito tiene {carrito.length} productos</h2>
			</div>
			<div className='row'>
				<h2>Total {precio} COP</h2>
				<div class='btn-group'>
					<Link to={'/productos'}>
						<button className='btn btn-primary'>Agregar más productos</button>
					</Link>
					<Link to={'/'}>
						<button className='btn btn-primary'>Pagar</button>
					</Link>
				</div>
			</div>
			<div className='row m-3'>
				{carrito.map((element, index) => {
					return (
						<Suspense fallback={<div>Cargando...</div>}>
							<CartComponent key={index} product={element} />
						</Suspense>
					);
				})}
			</div>
		</div>
	);
};

export default CartContainer;
