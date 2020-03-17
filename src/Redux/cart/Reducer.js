import {addItemtoCart} from './cartRedux.utils';
const INITIAL_STATE={
    Hidden:false,
    cartItem:[]
}
const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'Hidden_Cart':
            return{
                ...state,
                Hidden:!state.Hidden
            };
        case 'cartItem':
            return{
                cartItem: addItemtoCart(state.cartItem,action.payload)
            };
        case 'clearItem':
            return{
                state,
                cartItem: state.cartItem.filter(cartItem=>cartItem.id!==action.payload.id)
            };
        default:
            return state;

    }
};
export default CartReducer;