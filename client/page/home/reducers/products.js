export default function(products = [], action){
	switch (action.type) {
		case 'INIT_PRODUCTS':
			return action.products
		case 'ADD_ONE_PRODUCT_TO_CART':
			return products.map(p=>{
				if(p.id === action.id) {
					p = Object.assign({}, p, {pickNum: (p.pickNum || 0) + 1})
				}
				return p
			})
		case 'CHECKOUT':
			return products.map(p=> Object.assign({}, p, {pickNum: 0}))
		default:
			return products
	}
}