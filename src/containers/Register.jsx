import NavBarComponent from '../components/NavBarComponent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='container'>
			<div className='row'>
				<h1>Virtual Shop TSP</h1>
				<h2>Registro</h2>
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
							Repite la constraseña
						</label>
						<input
							type='password'
							class='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<div class='mb-3'>
						<label for='exampleInputPassword1' class='form-label'>
							Repite la constraseña
						</label>
						<input
							type='password'
							class='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<Link to={'/login'}>
						<button type='submit' class='btn btn-primary'>
							Guardar
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Register;
