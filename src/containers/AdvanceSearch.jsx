import { lazy, useContext, useEffect, Suspense, useState } from 'react';
import CategoryComponent from '../components/CategoryComponent';
import NavBarCompNoSearch from '../components/NavBarCompNoSearch';
import { CartContext } from '../context/CartContext';
const CardProduct = lazy(() => import('../components/CardComponent'));
const AdvanceSearch = () => {
	const DetailProduct = () => {};

	const {
		products,
		carrito,
		setCarrito,
		fetchData,
		fetchDataCategory,
		fetchDataSerchCategory,
		categories,
		setCategories
	} = useContext(CartContext);
	const [busqueda, setBusqueda] = useState({});

	useEffect(() => {
		fetchData(busqueda);
		return () => {};
	}, [busqueda]);

	useEffect(() => {
		fetchDataCategory();
		return () => {};
	}, [setCategories]);

	const AgregarAlCarrito = (event, product) => {
		carrito.push(product);
		setCarrito([...carrito]);
		console.log(carrito);
	};
	const searchCategory = (e) => {
		setBusqueda(e.target.value);
	};

	return (
		<div className='container'>
			<div className='row'>
				<NavBarCompNoSearch carrito={carrito} />
			</div>
			<div className='row'>Categorías disponibles:</div>
			<div className='row m-3'>
				{categories.map((element, index) => {
					return (
						<Suspense fallback={<div>Cargando...</div>}>
							<CategoryComponent key={index} category={element} />
						</Suspense>
					);
				})}
			</div>
		</div>
	);
};

export default AdvanceSearch;
