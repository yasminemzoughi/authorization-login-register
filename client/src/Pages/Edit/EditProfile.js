
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate} from 'react-router-dom';
import { editContact, getContact } from '../../JS/Actions/contact';
import './Edit.css';

const Edit = () => {
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState({name:"", email:"", phone:""});
    const contactToGet = useSelector(state => state.contactReducer.contactToGet)
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        dispatch(getContact(match.params.id))
    })
    const handleEdit = () => {
        dispatch(editContact(match.params.id, newContact));
        navigate(-1);
    }
    return (
        <div className='edit'>
            <h1>Edit contact</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={`${contactToGet.name}`} name="name" value={newContact.name} onChange={handleChange} />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder={`${contactToGet.email}`} name="email" value={newContact.email} onChange={handleChange} />
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder={`${contactToGet.phone}`} name="phone" value={newContact.phone} onChange={handleChange} />
            <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit Contact</Button></Link>
        </div>
    )
}

export default Edit