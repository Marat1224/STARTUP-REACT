import './Messages.css'
import React from 'react'
import Dialog from './Dialog/Dialog'

const Messages = (props) => {
    const dialogs =[{name:'Max',id:'1'},{name:'Jake',id:'2'},{name:'John',id:'3'}]
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
            <div className='users'>
                
                {dialogs.map((el)=>(
                    <Dialog name={el.name} />
                ))}
                 </div>

           
        </div>
    
     

    
    )
}
export default Messages