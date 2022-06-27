import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const NavBarComponent = ({ handleKeyUp, children, searchBar }) => {
	const { carrito } = useContext(CartContext);

	return (
		<nav class=' col navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<a class='navbar-brand'>Virtual Shop TSP</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<div class='btn-group'>
								<Link to={'/home'}>
									<button className='btn btn-primary'>Inicio</button>
								</Link>
								<Link to={'/productos'}>
									<button className='btn btn-primary'>Productos</button>
								</Link>
								<Link to={'/search'}>
									<button type='button' class='btn btn-primary'>
										Busqueda Avanzada{' '}
									</button>
								</Link>

								<Link to={'/carrito'}>
									<button type='button' class='btn btn-primary'>
										Ir al carrito
										<span class='badge text-bg-secondary'></span>
									</button>
								</Link>
							</div>
						</li>
						<li class='nav-item'></li>
					</ul>
					<form class='d-flex'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Buscar productos'
							aria-label='Search'
							id='Search'
							onInput={searchBar}
						/>
						<div class='btn btn-primary'>
							<span class='badge text-bg-secondary'>
								Items {carrito.length}
							</span>
							{children}
						</div>
					</form>
					<Link to={'/login'}>
						<button type='button' class='btn btn-primary'>
							Cerrar Sesión
							<span class='badge text-bg-secondary'></span>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBarComponent;
