import { lazy, useContext, useEffect, Suspense, useState } from 'react';
import { useParams } from 'react-router';
import NavBarCompNoSearch from '../components/NavBarCompNoSearch';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
const CardProduct = lazy(() => import('../components/CardComponent'));
const ProductsCategory = () => {
	const DetailProduct = () => {};
	const { id } = useParams();

	const { products, carrito, setCarrito, fetchDataSerchCategory, setProducts } =
		useContext(CartContext);

	useEffect(() => {
		fetchDataSerchCategory(id);
		return () => {};
	}, [id]);

	const AgregarAlCarrito = (event, product) => {
		carrito.push(product);
		setCarrito([...carrito]);
		console.log(carrito);
	};
	console.log(products);

	// const handleKeyUp = (e) => {
	// 	const productsFilter = products.filter((element) => {
	// 		if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// 	setProducts(productsFilter);
	// };

	return (
		<div className='container'>
			<div className='row'>
				<NavBarCompNoSearch
					carrito={carrito}
					// handleKeyUp={handleKeyUp}
				/>
			</div>
			<div className='row'>Categoria = {id}</div>
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

export default ProductsCategory;
