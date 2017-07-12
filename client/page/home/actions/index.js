export const addOneProductToCart = (id)=> ({
	type: 'ADD_ONE_PRODUCT_TO_CART',
	id
})

export const initProducts = ()=> {
	const products = [{name:'mini', price:9, storeTotal: 3, id:'198789'}, {name:'beer', price:1, storeTotal: 10, id:'24982'}]
	return {
		type: 'INIT_PRODUCTS',
		products
	}
}

export const checkout = ()=> {
	return {
		type: 'CHECKOUT'
	}
}