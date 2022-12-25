import React, { createContext, useContext, useState } from "react";

import { Product } from "@/models/Product";


enum ShoppingCartActionResult
{
	Unfulfilled,
	PartiallyFulfilled,
	Fulfilled
}

type ShoppingCartItem =
{
	product: Product;
	quantity: number;
};

type ShoppingCart =
{
	items: ShoppingCartItem[],

	addItem:    (product: Product) => ShoppingCartActionResult,
	removeItem: (product: Product) => ShoppingCartActionResult,
	clearItems: () => ShoppingCartActionResult,
};


// Simulates the quantity of each product available in stock.
const quantityAvailable = 5;

const context = createContext({} as ShoppingCart);

export function useShoppingCart()
{
	return useContext(context);
}

export function ShoppingCartProvider(props: ShoppingCartProviderProps)
{
	const initialShoppingCart: ShoppingCart =
	{
		items: [],
		addItem,
		removeItem,
		clearItems,
	};
	
	const [ cart, setCart ] = useState(initialShoppingCart);
	const { children } = props;
	const { Provider } = context;


	return (
		<Provider value={cart} >
			{ children }
		</Provider>
	);


	function addItem(product: Product, quantity: number = 1): ShoppingCartActionResult
	{
		let result = ShoppingCartActionResult.Unfulfilled;
		setCart(core);
		return result;

		function core(currentCart: ShoppingCart): ShoppingCart
		{
			// 1.
			const items = cloneItems(currentCart);
	
			let item = findProduct(items, product);
	
			if (item !== undefined && quantityAvailable <= item.quantity)
			{
				result = ShoppingCartActionResult.Unfulfilled;
				return currentCart;
			}
	
			// 2.
			if (item === undefined)
			{
				item = { product, quantity: 0 };
				items.push(item);
			}
	
			// 3.
			const newQuantity = item.quantity + quantity;
	
			if (newQuantity <= quantityAvailable)
			{
				item.quantity = newQuantity;
				result = ShoppingCartActionResult.Fulfilled;
			}
			else
			{
				item.quantity = quantityAvailable;
				result = ShoppingCartActionResult.PartiallyFulfilled;
			}
	
			// 4.
			const newCart: ShoppingCart = { ...cart, items };
			return newCart;
		}
	}

	function removeItem(product: Product, quantity: number = 1): ShoppingCartActionResult
	{
		let result = ShoppingCartActionResult.Unfulfilled;
		setCart(core);
		return result;

		function core(currentCart: ShoppingCart): ShoppingCart
		{
			// 1.
			let items = cloneItems(currentCart);
			let item = findProduct(items, product);
	
			if (item === undefined || item.quantity === 0)
			{
				result = ShoppingCartActionResult.Unfulfilled
				return currentCart;
			}
	
			// 2.
			const newQuantity = item.quantity - quantity;
	
			result = 0 <= newQuantity
				   ? ShoppingCartActionResult.Fulfilled
				   : ShoppingCartActionResult.PartiallyFulfilled;
	
			if (0 < newQuantity)
				item.quantity = newQuantity;
			else
				items = items.filter(item => item.product.id != product.id);
	
			// 3.
			const newCart: ShoppingCart = { ...cart, items };
			return newCart;
		}
	}

	function clearItems(): ShoppingCartActionResult
	{
		let result = ShoppingCartActionResult.Unfulfilled;
		setCart(core);
		return result;

		function core(currentCart: ShoppingCart): ShoppingCart
		{
			result = ShoppingCartActionResult.Fulfilled;

			const newCart: ShoppingCart = { ...currentCart, items: [] };
			return newCart;
		}
	}
}

type ShoppingCartProviderProps =
{
	children: React.ReactNode,
}


function cloneItems(cart: ShoppingCart): ShoppingCartItem[]
{
	return cart.items.map(item => ({ ...item } as ShoppingCartItem));
}

function findProduct(items: ShoppingCartItem[], product: Product): ShoppingCartItem | undefined
{
	return items.find(item => item.product.id === product.id);
}