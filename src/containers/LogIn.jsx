import NavBarComponent from '../components/NavBarComponent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const LogIn = () => {
	return (
		<div className='container'>
			<div className='row'>
				<h1>Bienvenido a tu catalogo virtual</h1>
				<h2>Virtual Shop TSP</h2>
			</div>
			<div className='row'>
				<h2>Inicia sesión</h2>
			</div>
			<div className='row'>
				<form>
					<div class='mb-3'>
						<label for='exampleInputEmail1' class='form-label'>
							Email
						</label>
						<input
							type='email'
							class='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
					</div>
					<div class='mb-3'>
						<label for='exampleInputPassword1' class='form-label'>
							Password
						</label>
						<input
							type='password'
							class='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<Link to={'/'}>
						<button type='submit' class='btn btn-primary'>
							Iniciar sesión
						</button>
					</Link>
					<Link to={'/register'}>
						<button type='submit' class='btn btn-primary'>
							Registrarse
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LogIn;
