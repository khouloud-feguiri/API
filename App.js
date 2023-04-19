
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Admin from './Pages/Admin';
import Contact from './Pages/Contact';
import Home from './Pages/home';
import Users from './Pages/Users';

function App() {

  return (
    <div className="App">
      <Navigation/>
     < Routes>
     <Route path='/' element={<Home/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/user.id' element={<Profile/>}/>
     </Routes>

        
    </div>
  );
}
export default App;
