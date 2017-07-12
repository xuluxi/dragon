import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { addOneProductToCart } from '../actions'

const mapStateToProps = (store, ownProps)=> ({
	products: store.products
})

const mapDispatchToProps = (dispatch, ownProps)=> ({
	addProductToCart: (id)=>{
		dispatch(addOneProductToCart(id))
	}
})

const ProductsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)

export default ProductsListContainer