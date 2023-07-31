import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { login } from '../../JS/Actions/User'
import './Login.css'

const Login = () => {
const [user, setUser] = useState({})
const dispatch = useDispatch()
const navigate = useNavigate()

const handleChange = (e)=>{
  setUser({...user,[e.target.name]: e.target.value})
}
const handleUser = (e) => {
  e.preventDefault();
  dispatch(login(user))

  navigate('/Profile')
}


  return (
    <div  className='input'>
            <h1>login page </h1>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
             placeholder="Enter email"
              name="email"   
              onChange={handleChange}/>

            <Form.Label>Password</Form.Label>
            <Form.Control 
  className="smaller-input"
              type="text"
             placeholder="Enter password"
              name="password"

              onChange={handleChange}  />

<Button className='btn-register'
 variant="primary"
  type="submit"
  onClick={handleUser}
   >login</Button>

  </div>
  )
}

export default Login
