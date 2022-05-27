import { lazy, useContext, useEffect, Suspense, useState } from 'react';
import { useParams } from 'react-router';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
const CardProduct = lazy(() => import('../components/CardComponent'));
const ProductsContainer = () => {
	const DetailProduct = () => {};

	const { products, carrito, setCarrito, fetchData, setProducts } =
		useContext(CartContext);
	const [busqueda, setBusqueda] = useState({});

	useEffect(() => {
		fetchData(busqueda);
		return () => {};
	}, [busqueda]);

	const AgregarAlCarrito = (event, product) => {
		carrito.push(product);
		setCarrito([...carrito]);
		console.log(carrito);
	};

	// const handleKeyUp = (e) => {
	// 	const productsFilter = products.filter((element) => {
	// 		if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// 	setProducts(productsFilter);
	// };
	const searchBar = (e) => {
		setBusqueda(e.target.value);
	};

	return (
		<div className='container'>
			<div className='row'>
				<NavBarComponent
					carrito={carrito}
					// handleKeyUp={handleKeyUp}
					searchBar={searchBar}
				/>
			</div>
			<div className='row m-3'>
				{products.map((element, index) => {
					return (
						<Suspense fallback={<div>Cargando...</div>}>
							<CardProduct
								key={index}
								product={element}
								agregarAlCarrito={AgregarAlCarrito}
								Detail={DetailProduct}
							/>
						</Suspense>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsContainer;
