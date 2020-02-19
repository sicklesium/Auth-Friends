import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" color="inherit" >
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Friends</Link>
                    </Typography>
                    <Button
                        color="inherit"><Link style={{ color: 'white', textDecoration: 'none' }} to='/login'>Login</Link></Button>
                    <Button
                        color="inherit"><Link style={{ color: 'white', textDecoration: 'none' }} to='/friends'>Friends List</Link></Button>
                    <Button
                        color="inherit"><Link style={{ color: 'white', textDecoration: 'none' }} to='/addFriend'>Add Friend</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}