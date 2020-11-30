import { useReducer } from "react";
import axios from "axios";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  GET_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  UPDATE_CONTACT,
  CONTACT_ERROR,
} from "../types";

// Creating Initial State
const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };
     

  // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
        const res = await axios.delete(`/api/contacts/${id}`);   
        dispatch({
            type: DELETE_CONTACT,
            payload: id,
        });
      } catch (error) {
        dispatch({
          type: CONTACT_ERROR,
          payload: error.response.msg
        });
      }
    };

  // Update the contact
  const updateContact = async (contact) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
        dispatch({
          type: UPDATE_CONTACT,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: CONTACT_ERROR,
          payload: error.response.msg
        });
      }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS,
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

  // Filter The contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // CLear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getContacts,
        addContact,
        clearContacts,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
