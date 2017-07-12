import React from 'react'
import Product from './Product'
import AddBtn from './AddBtn'

const ProductsList = ({products, addProductToCart})=> {
	return (
		<ul>
		{
			products.map((p,i)=>{
				return (<li key={p.id}>
					<Product {...p}/>
					<AddBtn {...p} onClick={()=>addProductToCart(p.id)}/>
				</li>)
			})
		}
		</ul>
	)
}

export default ProductsList