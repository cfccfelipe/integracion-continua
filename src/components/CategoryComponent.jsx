import { Link } from 'react-router-dom';

const CategoryComponent = ({ category }) => {
	return (
		<div className='card align-items-center col-2 ' key={category.id}>
			<div className='card-body'>
				<p className='card-text'>{category.name}</p>
				<Link to={`/search/${category.id}`}>
					<p>
						<strong>id: {category.id}</strong>
					</p>
				</Link>
			</div>
		</div>
	);
};
export default CategoryComponent;
