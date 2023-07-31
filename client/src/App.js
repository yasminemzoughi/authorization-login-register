import './App.css';
import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Errors from './Pages/Errors';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/User';
import EditProfile from './Pages/Edit/EditProfile';
import Users from './Pages/Users/Users';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   if (localStorage.getItem("token")){
     dispatch(current());
   }
  
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar/>
      <Footer/>
      <h1>authentification</h1>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/edit/:id' element={<EditProfile/>} />
        <Route path='/*' element={<Errors/>} />

      </Routes>
    </div>
  );
}

export default App;
