import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/Actions/contact'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = () => {
    const dispatch = useDispatch()
    const listContacts = useSelector(state => state.contactReducer.listContacts)
    const load = useSelector(state => state.contactReducer.load)
    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "2%",flexWrap: "wrap",
            padding: "2%"}}>
            {load ? <h2>Loading ...</h2> : listContacts.map((el) => <ContactCard contact={el} key={el._id} />)}
        </div>
    )
}

export default ContactList