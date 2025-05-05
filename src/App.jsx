import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Landing from './pages/dashboard/Landing';
import './App.css';
import Userlanding from './pages/userdashboard/Userlanding';
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleLogin = () =>{
    setIsAuthenticated(true);
  }

  return (
    <>
     <BrowserRouter>
      <div>
        <Routes>
          {isAuthenticated && (
            <>
            <Route path="*" element={<Login onLogin={handleLogin} />}/>
            <Route path="/landing/*" element={<Landing/>} />
            <Route path="/user/*" element={<Userlanding />} />
            </>
          )}
          {/* {isAuthenticated && 
          <>
          
          </>
          } */}
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
