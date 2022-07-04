import navBar from '../../contansts/Data'
import {Box, Typography, makeStyles} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        // margin: '55px 130px 0 130px',
        marginTop: '55px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
             marginTop: '50px',
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));
function NavBar() {
    const classes = useStyle()
    return (
        <Box className={classes.component}>
            {
                navBar.map(data =>(
                    <Box className={classes.container}>
                <img src={data.url} className={classes.image} />
                <Typography className={classes.text} >{data.text}</Typography>
                </Box>
                ))
            }
        </Box>
    )
}

export default NavBar
