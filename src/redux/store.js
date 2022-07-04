import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductsReducer, getProductsDetailReducer, cartReducer} from './reducer/productReducer'

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductsDetailReducer,
    addToCart: cartReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store