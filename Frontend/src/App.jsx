import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/Signup';
import Home from './Pages/Home/Home';
import { useAuthContext } from './Context/AuthContext.jsx';
import  { Toaster } from 'react-hot-toast';
const App = () => {
  const {authUser}=useAuthContext();

  return (
    <div className='Main-container'>
        <Routes>
            <Route path='/' element={authUser?<Home />:<Navigate to='/login'></Navigate>} />
            <Route path='/signUp' element={authUser?<Navigate to='/'/>:<Signup/>}/>
            <Route path='/login' element={authUser?<Navigate to='/'/>:<Login/>} />
        </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
