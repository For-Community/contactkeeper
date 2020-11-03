import {useReducer} from "react";
import {v4 as uuid} from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {ADD_CONTACT, CLEAR_CURRENT, DELETE_CONTACT, SET_CURRENT, UPDATE_CONTACT} from "../types";

// Creating Initial State
const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Stephin reji",
                email: "mail@stephinreji.me",
                phone: "8920788383",
                type: "professional",
            },
            {
                id: 2,
                name: "Justin reji",
                email: "mail@justinreji.me",
                phone: "9968370557",
                type: "personal",
            },
            {
                id: 3,
                name: "Sheeja reji",
                email: "mail@sheejareji.me",
                phone: "9968750466",
                type: "personal",
            },
        ],
        current: null,
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = (contact) => {
        contact.id = uuid();
        dispatch({
            type: ADD_CONTACT,
            payload: contact,
        });
    };

    // Delete Contact
    const deleteContact = (id) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id,
        });
    };

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({
            type: SET_CURRENT,
            payload: contact,
        });
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT,
        });
    };

    // Update the contact
    const updateContact = (contact) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact,
        });
    };

    // Filter The contacts

    // CLear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
