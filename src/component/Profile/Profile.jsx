import './Profile.css'
import React from 'react'
import ava from '../../images/ava.jpg'
import Posts from './Posts/Posts'
import Profileinfo from './ProfileInfo/Profileinfo'
 function Profile(props){ //properties

     return(
         <div className='profile'>
            <Profileinfo name={props.name} status={props.status} />
             <Posts name={props.name} />
         </div>

     )
 }
 export default Profile



 