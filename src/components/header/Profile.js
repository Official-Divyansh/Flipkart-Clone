import { MenuItem, Typography, Menu } from "@material-ui/core"
import { useState } from "react"

const Profile = ({username, setUsername}) =>{

    const [open , setOpen] = useState(false)
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleClick = (event)=>{
        setOpen(event.currentTarget)
    }
    const logout = ()=>{
        setUsername('')
    }
    return(
        <>
        <Typography onClick={handleClick}>{username}</Typography>
        <Menu 
        anchorEl= {open}
        open={Boolean(open)}
        onClose={handleClose}>
            <MenuItem onClick={()=> {handleClose(); logout()}}>Logout</MenuItem>
        </Menu>
        </>
    )
}
export default Profile