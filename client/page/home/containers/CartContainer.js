import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { checkout } from '../actions'

const mapStateToProps = (store, ownProps)=>{
	return {
		cartProducts: store.products.filter(p=> p.pickNum)
	}
} 

const mapDispatchToProps = (dispatch, ownProps)=> ({
	onCheckout: ()=>{
		dispatch(checkout())
	}
})

const CartContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart)

export default CartContainer