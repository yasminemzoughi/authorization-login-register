import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { deleteContact } from '../../JS/Actions/contact';
import './ContactCard.css';

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.userReducer.user)

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png" alt ="avatar"/>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>{contact.email}</Card.Text>
                <Card.Text>{contact.phone}</Card.Text>
                { ( user && user._id  === contact.id_user) 
                    ? <Button variant="primary" onClick={() => navigate(`/edit/${contact._id}`)}>Edit</Button>
                    : null
                }
                
                {/* <Button variant="primary" onClick={() => dispatch(deleteContact(contact._id))}>Delete</Button> */}
                { ( user && user._id  === contact.id_user) 
                    ?
                <Button variant="primary" onClick={() => dispatch(deleteContact(contact._id))}>Delete</Button>
            : null}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard