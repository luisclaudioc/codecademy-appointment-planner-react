import React from "react";

export const ContactPicker = ({
  allContacts,
  setContact,
  value,
  name
}) => {
  return (
    <>
      <select onChange={(e) => setContact(e.target.value)} value={value} name={name}>
        <option defaultChecked value={""}>No Contact Selected</option>
        {allContacts.map((contact, index) => {
          return <option key={index} value={contact.name}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
