

import {Dialog, DialogContent, makeStyles, Box, Typography, Button, TextField} from '@material-ui/core'
import { useState } from 'react'
import { authenticateSignup, authenticateLogin } from '../../service/Api'



const useStyle = makeStyles({
    container:{
        width: '90vh',
        height: '70vh',
  
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        width: '40%',
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *':{
            color: '#FFFFFF',
            fontWeight: 600
        }

    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
   
})
function Login({open , setOpen , setUsername }) {
    const [account , setAccount] = useState('login')

    const changeToSignUp = () =>{
        setAccount('signUp')
    }
    const changeToLogin = () =>{
        setAccount('login')
    }

    const classes = useStyle()
    const handleClose = ()=>{
        setOpen(false)
    }

    const signupinitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    }
    const logininitialValues = {
        username: '',        
        password: ''
    }

    const [signup , setSignup] = useState(signupinitialValues)
    const [login , setLogin] = useState(logininitialValues)
    const signupUser = async ()=>{
        let response = await authenticateSignup(signup)
        if(!response) return;
        handleClose()
        setUsername(signup.username)
    }
    const loginUser = async ()=>{
        let response = await authenticateLogin(login)
        if(!response) return;
        handleClose()
        setUsername(login.username)

        console.log("clicked")
    }

    const onInputChange = (e)=>{
        setSignup({...signup, [e.target.name]: e.target.value})
        console.log(signup)
    }
    const onLoginChange = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
        console.log(login)
    }
    return (
        <Dialog open={open} onClose={()=> handleClose()} >
              <DialogContent className={classes.container} >
                  <Box style={{display: 'flex'}}>
                      <Box className={classes.image}>
                      <Typography varient='h5'>Login</Typography>
                      <Typography>Get aceess to Your Order,Wishlist and Reccomandation</Typography>
                      </Box>
                        {
                           account === 'login'?

                            <Box className={classes.login}>
                            <TextField onChange={(e) => onLoginChange(e)} name='username' label='Enter Username' />
                            <TextField  onChange={(e) => onLoginChange(e)} name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn} onClick={() => loginUser()}  >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <Typography onClick={()=> changeToSignUp()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> :
                            <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter lastname ' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number' />
                           
                            <Button onClick={() => signupUser()} className={classes.requestbtn}>Sign Up</Button>
                            <Typography onClick={()=> changeToLogin()}  className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> 
                    }
                  </Box>
              </DialogContent>
        </Dialog>
    )
}

export default Login
