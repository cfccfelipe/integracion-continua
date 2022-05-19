import { Link } from 'react-router-dom';
const CardComponent = ({ product, Detail }) => {
	return (
		<div className='card align-items-center col-3 ' key={product.id}>
			<div>
				<img
					src='https://th.bing.com/th/id/OIP.wx6m-Q7_gg4ZTJfVuVHdxgHaHa?pid=ImgDet&rs=1'
					className='card-img-top'
					alt='Imagen del producto'
				/>
			</div>
			<div></div>

			<div className='card-body'>
				<p className='card-text'>
					{product.title} <strong>$ {product.price}</strong>
				</p>
				<p> </p>
				<Link to={`/detail/${product.id}`}>
					<button
						className='btn btn-primary '
						onClick={() => {
							Detail();
						}}
					>
						Detail
					</button>
				</Link>
			</div>
		</div>
	);
};
export default CardComponent;
