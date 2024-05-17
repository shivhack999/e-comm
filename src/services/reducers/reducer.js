import {ADD_TO_CART} from '../constants'

const initialState = {
    cartDate:[]
}
export default function cartItems(state = initialState,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartDate:action.data
            }
            default :
            return state
    }
}