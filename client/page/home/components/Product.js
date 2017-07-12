import React from 'react';

const Product = ({name, price})=>{
	return (<div>
		{name}-${price}
	</div>)
}

export default Product