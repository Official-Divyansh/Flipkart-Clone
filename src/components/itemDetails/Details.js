// import { Button, } from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getProductDetail } from "../../redux/actions/productActions"
import { makeStyles } from "@material-ui/core"
import { Box, Grid, styled, Typography } from "@mui/material"
import ProductDetail from "./ProductDetail"
import ActionItem from "./ActionItem"
 

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const Details = ({match}) => {
    // const classes = useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const {product} = useSelector(state => state.getProductDetail)
    const dispatch = useDispatch()
    useEffect(()=>{
        // console.log(match.params.id)
        if(product && match.params.id !== product.id)
      dispatch(getProductDetail(match.params.id))
    },[dispatch,product,match.params.id])
    // const dispatch2 = useDispatch()
   
//     const onItemToCart = ()=>{
//       dispatch2(addToCart(product.id))
//    }
  
    return (
        <>
        <Component>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }   
        </Component>
        </>

    )
}

export default Details
