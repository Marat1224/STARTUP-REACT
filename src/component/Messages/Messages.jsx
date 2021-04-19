import './Messages.css'
import React from 'react'

function Messages(){
    return(
        <div className='messages'>
            <div className="dialog">
                <p className='mine'>Hello</p>
                <p>Hello</p>
                <p className='mine'>Bye</p>
                <p>Bye</p>
            </div>
            <div className="inputMessage">
                <button>Send Message</button>
                <textarea />
            </div>
           
        </div>

     

    
    )
}
export default Messages