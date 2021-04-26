
import './App.css';
import Menu from './component/Menu/Menu'
import Header from './component/Header/Header' 
import Profile from './component/Profile/Profile'
import Messages from './component/Messages/Messages'
import { Route } from 'react-router';

function App() {
    
  return (
    <div className="app">
      <Header />
      <Menu />
      <Route path='/profile' render={() => <Profile name='Marat' status='Hello WOOrlD' />} />
      <Route path='/message' render={()=><Messages name='Marat'/>} />
      
     
    </div>
  )
}
export default App




