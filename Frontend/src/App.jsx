import React from 'react'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login/Login.jsx'
import Signup from './Pages/SignUp/Signup.jsx'
import Home from './Pages/Home/Home.jsx'
const App = () => {
  return (
    <div  className='Main-container'>
      <Home/>
    </div>
  )
}

export default App
