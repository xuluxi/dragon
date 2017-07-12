import React from 'react'

const Cart = ({cartProducts, onCheckout})=> {
	console.log(cartProducts, 1111)
	let totalMoney = 0;
	return (
		<ul>
			{
				cartProducts.length ? 
					cartProducts.map(p=> {
						totalMoney += p.price * p.pickNum
						return <li key={p.id}>{p.name} * {p.pickNum}</li>
					})
				: 'add some products to cart'
			}
			<p>{totalMoney ? 'total money: '+totalMoney : '' }</p>
			{
				totalMoney ? <button onClick={onCheckout}>checkout</button> : null
			}
		</ul>
	)
}

export default Cart