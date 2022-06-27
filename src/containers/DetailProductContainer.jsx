import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBarComponent from '../components/NavBarComponent';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const DetailContainer = () => {
	const { id } = useParams();
	const { products, carrito, setCarrito } = useContext(CartContext);

	const [data, setData] = useState({});

	const AgregarAlCarrito = (event, product) => {
		carrito.push(product);
		setCarrito([...carrito]);
		console.log(carrito);
	};
	const [busqueda, setBusqueda] = useState({});

	useEffect(() => {
		let result = products.filter((producto) => producto.id == id);
		setData(result[0]);
	}, []);
	const searchBar = (e) => {
		setBusqueda(e.target.value);
	};
	let category = data.domain_id;

	return (
		<div>
			<div className='row'>
				<NavBarComponent
					carrito={carrito}
					// handleKeyUp={handleKeyUp}
					searchBar={searchBar}
				/>
			</div>

			<div className='row'>
				<div className='card align-items-center col-12 ' key={data.id}>
					<div>
						<img
							src={data.thumbnail}
							className='card-img-top'
							alt={data.title}
						/>
					</div>
					<div></div>

					<div className='card-body'>
						<p className='card-text'>
							<strong>ID </strong>
							{data.id}
						</p>
						<p className='card-text'>
							<strong>Nombre </strong>
							{data.title}
						</p>
						<p className='card-text'>
							<strong>Precio </strong>${data.price} {data.currency_id}
						</p>
						<p className='card-text'>
							<strong>Disponible </strong>
							{data.available_quantity}
						</p>
						<p className='card-text'>
							<strong> Codición </strong>
							{data.condition}
						</p>
						<p className='card-text'>
							<strong> Categoría </strong>
							{data.domain_id}
						</p>

						<button
							className='btn btn-primary'
							onClick={(event) => {
								AgregarAlCarrito(event, data);
							}}
						>
							Agregar
						</button>
						<Link to={'/productos'}>
							<button className='btn btn-primary'>Regresar</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailContainer;
