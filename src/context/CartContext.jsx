import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const list = [
		{ id: 1, title: 'shoes1', price: 3000 },
		{ id: 2, title: 'shoes2', price: 4000 },
		{ id: 3, title: 'shoes3', price: 5000 }
	];
	const [products, setProducts] = useState(list);
	return (
		<CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
	);
};
