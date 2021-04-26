import './Profile.css'
import React from 'react'
import ava from '../../images/ava.jpg'
import Posts from './Posts/Posts'
import Profileinfo from './ProfileInfo/Profileinfo'
 function Profile(props){ //properties
    console.log(props);
     return(
         <div className='profile'>
            <Profileinfo name={props.name} status={props.status} />
             <Posts />
         </div>

     )
 }
 export default Profile



 