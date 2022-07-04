import * as actionType from '../constants/productConstant'

export const getProductsReducer = (state = { products: []}, action)=>{
    switch (action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products: action.payload}
            case actionType.GET_PRODUCT_FAIL:
             return {error: action.payload}
             default:
                 return state
    }
}
export const getProductsDetailReducer = (state = { product: {}}, action)=>{
    switch (action.type){
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product: action.payload}
            case actionType.GET_PRODUCT_DETAIL_FAIL:
             return {error: action.payload}
             default:
                 return state
    }
}

export const cartReducer = (state = { cartItem: []}, action)=>{
    switch (action.type){
        case actionType.ADD_TO_CART:
          const item  = action.payload
          const exist = state.cartItem.find(product => product.id=== item.id)
          if(exist) return;
              return {...state, cartItem: [...state.cartItem, item]}

        case actionType.REMOVE_FROM_CART:
                return {
                    ...state, cartItem: state.cartItem.filter(product => product.id !== action.payload)
                }
              default:
                  return state
          
    }
}
