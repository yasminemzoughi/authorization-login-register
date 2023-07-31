import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT_USER } from '../../JS/ActionTypes/User';
import "./Profile.css"


const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);
   const dispatch = useDispatch()

   const logout = ()=>{
    dispatch(LOGOUT_USER)
   }
    return (
        <div className='profile'>
                <div> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png" />
                        <Card.Body>
                            <Card.Title>{user && user.name}</Card.Title>
                            <Card.Text>{user && user.email}</Card.Text>
                            <Card.Text>{user && user.phone}</Card.Text>
                        </Card.Body>

                        <div className='buttons'>
                        <Link to={'/'}><Button variant="primary">home</Button> </Link> 
                   <Link to={'/Edit'}><Button variant="primary">edit</Button></Link>
                   <Button variant="primary" onClick={logout} >Log out</Button>
                   </div>
                    </Card>
                </div>           
        </div>
    
    )}

export default Profile