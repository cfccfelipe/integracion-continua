const CartComponent = ({ product }) => {
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
				<p className='card-text'>
					{product.title} <strong>$ {product.price}</strong>
				</p>
				<p> </p>
			</div>
		</div>
	);
};
export default CartComponent;
