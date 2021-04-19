import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu(){
    return(
        <div className='menu'>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/message'>Message</NavLink>
            {/* <NavLink to=''>Friends</NavLink>
            <NavLink>Users</NavLink>
            <NavLink>Settings</NavLink> */}
        </div>
    )
}
export default Menu