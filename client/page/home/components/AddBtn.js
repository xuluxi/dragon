import React from 'react'

const AddBtn = ({storeTotal, pickNum, onClick})=> {
	let soldOut = !(storeTotal - (pickNum || 0))

	if (soldOut) {
		return <button disabled>Sold Out</button>
	}
	
	return (<button 
			onClick={onClick}
		>Add To Cart</button>)
}

export default AddBtn