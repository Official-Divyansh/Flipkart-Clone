import axios from "axios"
import * as action from '../constants/productConstant'

const url = 'https://flipv2.herokuapp.com';
export const getProducts =()=> async (dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/products`)
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload: data})
    }catch(error){
        console.log({type: action.GET_PRODUCT_FAIL, payload: error.data})
    }
}
export const getProductDetail =(id)=> async (dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data})
    }catch(error){
        console.log({type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.message})
    }
}
export const addToCart =(id)=> async (dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type: action.ADD_TO_CART, payload: {...data}})
    }catch(error){
        console.log("error cart", error.message)
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: action.REMOVE_FROM_CART,
        payload: id
    })

};