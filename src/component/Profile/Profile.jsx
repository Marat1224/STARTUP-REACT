import './Profile.css'
import React from 'react'
import ava from '../../images/ava.jpg'
 function Profile(props){ //properties
     return(
         <div className='profile'>
             <div className='profile-info'>
                <img src={ava} />
                <div className='about-me'>
                    <p className='name'>Marat</p>
                    <p className='status'>Hello World</p>
                </div>
             </div>
             <div className='posts'>
                <h2>Posts</h2>
                <div className='new-post'>
                    <textarea placeholder='Enter the text' />
                    <button>Add Post</button>
                </div>
                <div className=''>
                    <div className='post'>
                    <div>
                        <img src={ava} />
                        <p className='name'>Marat</p>
                    </div>
                    <p className='post-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quis necessitatibus error libero ducimus illum optio odio, voluptatibus voluptate impedit, iste, molestias enim minima! .</p>
                    </div>
                </div>
             </div>
         </div>

     )
 }
 export default Profile



 