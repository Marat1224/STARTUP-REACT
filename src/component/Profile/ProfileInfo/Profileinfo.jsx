import ava from '../../../images/ava.jpg'
function Profileinfo(props){
    return(
        <div className='profile-info'>
        <img src={ava} />
        <div className='about-me'>
            <p className='name'>{props.name}</p>
            <p className='status'>{props.status}</p>
        </div>
     </div>
    )
} 
export default Profileinfo