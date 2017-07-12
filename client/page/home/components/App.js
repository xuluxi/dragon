import React from 'react'
import ProductsList from '../containers/ProductsListContainer'
import CartContainer from '../containers/CartContainer'

const App = ()=> {
	return (
		<div>
			Products
			<ProductsList/>
			Cart
			<CartContainer/>
		</div>
	)
}

export default App