import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
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
	async function fetchDataSerchCategory(category) {
		const data = await fetch(
			`https://api.mercadolibre.com/sites/MCO/search?category=${category}`
		);
		const response = await data.json();
		const values = response.results;
		setProducts(values);
	}
	async function fetchDataCategory() {
		const data = await fetch(
			`https://api.mercadolibre.com/sites/MCO/categories`
		);
		const response = await data.json();
		setCategories(response);
	}

	return (
		<CartContext.Provider
			value={{
				products,
				categories,
				setCategories,
				carrito,
				setCarrito,
				fetchData,
				setProducts,
				fetchDataProduct,
				fetchDataCategory,
				fetchDataSerchCategory
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
