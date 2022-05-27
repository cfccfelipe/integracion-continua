import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
const DetailContainer = () => {
	const { id } = useParams();
	const { products, carrito } = useContext(CartContext);

	const [data, setData] = useState({});

	useEffect(() => {
		let result = products.filter((producto) => producto.id == id);
		setData(result[0]);
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<NavBarComponent carrito={carrito} />
				<h1>Nombre del producto {data.title}</h1>
				<p>Precio : $ {data.price} </p>
				<div width='1000px' height='1000px'>
					<img src={data.thumbnail} alt={data.title} />
				</div>
			</div>
		</div>
	);
};

export default DetailContainer;
