import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import LoginDialog from '../login/Login'
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/ContexProvider';
import Profile from './Profile';
import { addToCart } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        marginLeft:'10px',
        padding: '5px 40px'       
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            color: '#fff',
            aligItem: 'center',
            textDecoration: 'none'
        },
    }
}));

const CustomButtons = () => {
    const classes = useStyle();
    
    const cartDetails = useSelector(state => state.addToCart);
    const { cartItem } = cartDetails;
   
    const [open, setOpen] = useState(false)
    const openLoginDialog = () =>{
        setOpen(true)
    }
    const {username, setUsername }= useContext(LoginContext)
    return (
        <Box className={classes.wrapper}>
            {
                username ? <Profile username={username} setUsername={setUsername} /> :
            <Link><Button variant="contained" onClick={()=> openLoginDialog()} className={classes.login} >Login</Button></Link>
            }
                <Typography style={{ marginTop: 2 }}>More</Typography>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItem.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setUsername={setUsername}/>
        </Box>
    )
}

export default CustomButtons;