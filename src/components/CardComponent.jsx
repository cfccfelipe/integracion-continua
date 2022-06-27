import { Link } from 'react-router-dom';
const CardComponent = ({ product, agregarAlCarrito, Detail }) => {
	return (
		<div className='card align-items-center col-3 ' key={product.id}>
			<div>
				<img
					src={product.thumbnail}
					className='card-img-top'
					alt={product.title}
				/>
			</div>
			<div></div>

			<div className='card-body'>
				<p className='card-text'>{product.title}</p>
				<p>
					<strong>$ {product.price}</strong>{' '}
				</p>
				<Link to={`/detalle/${product.id}`}>
					<button
						className='btn btn-primary '
						onClick={() => {
							Detail();
						}}
					>
						Detalle
					</button>
				</Link>
				<button
					className='btn btn-primary'
					onClick={(event) => {
						agregarAlCarrito(event, product);
					}}
				>
					Agregar
				</button>
			</div>
		</div>
	);
};
export default CardComponent;
