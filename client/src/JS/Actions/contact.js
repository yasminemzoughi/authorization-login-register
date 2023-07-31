// importation 
import axios from 'axios';
import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../ActionTypes/contact"


// get all contacts
export const getContacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS })
    try {
        let result = await axios.get('/api/contact/getallcontact');
        dispatch({type: GET_CONTACTS , payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.respanse })
    }
}

// add contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization : localStorage.getItem("token")
            }
        }
        await axios.post('/api/contact/', newContact, config);
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.respanse })
    }
}

// delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.respanse })
    }
}

// edit contact
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/${id}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.respanse })
    }
}

// get one contact
export const getContact = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACTS})
    try {
        let result = await axios.get(`/api/contact/${id}`)
        dispatch({ type: GET_CONTACT, payload : result.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload: error.respanse })
    }
}