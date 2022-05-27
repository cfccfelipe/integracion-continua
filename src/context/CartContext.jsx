import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [carrito, setCarrito] = useState([]);

	async function fetchData(searchQuery) {
		const data = await fetch(
			`https://api.mercadolibre.com/sites/MCO/search?q=${searchQuery}`
		);
		const response = await data.json();
		setProducts(response.results);
	}
	async function fetchDataProduct(id) {
		const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
		const response = await data.json();
		setProducts(response);
	}

	return (
		<CartContext.Provider
			value={{
				products,
				carrito,
				setCarrito,
				fetchData,
				setProducts,
				fetchDataProduct
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
