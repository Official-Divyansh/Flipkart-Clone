import axios from 'axios';

const url = 'https://flipv2.herokuapp.com'

export const authenticateSignup = async (user) =>{
    try{

      return await axios.post(`${url}/signup` , user)
    } catch(error){
        console.log('error while calling api', error.message)
    }
}
export const authenticateLogin = async (user) =>{
    try{
      return await axios.post(`${url}/login` , user)
    } catch(error){
        console.log('error while calling api', error.message)
    }
}