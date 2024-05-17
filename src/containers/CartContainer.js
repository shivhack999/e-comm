//According to tutorial its HomeContainer
import {connect} from 'react-redux'
import Card from '../components/card/card'
import {addToCart} from '../services/actions/Action'

 const mapStateToProps = state =>({

 })
 const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
 })
export default connect(mapStateToProps,mapDispatchToProps)(Card)
// export default Card;