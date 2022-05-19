import { lazy, useContext, Suspense } from 'react';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
const CardProduct = lazy(() => import('../components/CardComponent'));
const ProductsContainer = () => {
	const DetailProduct = () => {};

	const { products } = useContext(CartContext);
	console.log(products);
	return (
		<div className='container'>
			<div className='row'>
				<NavBarComponent />
			</div>
			<div className='row m-3'>
				{products.map((element) => {
					return (
						<Suspense fallback={<div>Cargando...</div>}>
							<CardProduct product={element} Detail={DetailProduct} />;
						</Suspense>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsContainer;
