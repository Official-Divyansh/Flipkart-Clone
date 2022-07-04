import {Box, makeStyles} from '@material-ui/core'

import NavBar from "./NavBar"
import Banner from "./Banner"
import Slide from './Slide'
// import { products } from '../../contansts/Data';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';


const useStyle = makeStyles({
    component:{
        padding: 10,
        background: '#F2F2F2'
    }
})

function Home() {

    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    const classes = useStyle()
    // console.log(products)
    return (
        <div>

       <NavBar/>
       <Box className={classes.component}>

       <Banner/>
       </Box>
       <Slide products={products}/>
       <Slide products={products} />
       <Slide products={products} />
        </div>
    )
}

export default Home
