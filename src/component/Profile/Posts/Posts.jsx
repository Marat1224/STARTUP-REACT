import ava from '../../../images/ava.jpg'
function Posts(props){
    return(
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
             </div>)}
export default Posts