import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Componant/Aboutpage/About';
import Header from './Componant/Header/Header';
import Home from './Componant/Homepage/Home';
import Service from './Componant/Servicepage/Service';
import { Route,Routes } from 'react-router-dom';
import Registration from './Componant/Registrationpage/Registration';
import Singin from './Componant/Singin/Singin'; 
import RequireAuth from './Componant/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App"> 
    <Header/>

    <Routes> 
      <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/service" element={

         <RequireAuth> 
           <Service />
         </RequireAuth>

      }
    
      />
      <Route path="/registration" element={<Registration />} />
      <Route path="/singin" element={<Singin />} />
    </Routes>
   
    </div>
  );
}

export default App;
