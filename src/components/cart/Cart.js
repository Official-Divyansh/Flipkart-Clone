import { useEffect } from 'react';

import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/productActions';
import TotalView from './TotalView';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';


const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const Cart = () => {
    const cartDetails = useSelector(state => state.addToCart);
    const { cartItem } = cartDetails;
    const { id } = useParams();
   

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItem && id !== cartItem.id)   
            dispatch(addToCart(id));
        console.log(cartItem.length, "length");
    }, [dispatch, cartItem, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return (
        <>
        { cartItem.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItem?.length})</Typography>
                    </Header>
                        {   cartItem.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton  variant="contained">Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItem} />
                </Grid>
            </Component> : <EmptyCart />
        }
        </>

    )
}

export default Cart;