import React, { useReducer } from "react";
import uuid from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

// Creating Initial State
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Stephin reji",
        email: "mail@stephinreji.me",
        phone: "8920788383",
        type: "personal",
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
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update the contact

  // Filter The contacts

  // CLear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
