import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
const DetailContainer = () => {
	const { id } = useParams();
	const { products } = useContext(CartContext);
	const [data, setData] = useState({});
	useEffect(() => {
		let result = products.filter((prod) => prod.id === Number(id));
		console.log(result);
		setData(result[0]);
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<NavBarComponent />
				<h1>Nombre del producto {data.title}</h1>
				<p>Precio : $ {data.price} </p>
			</div>
		</div>
	);
};

export default DetailContainer;
