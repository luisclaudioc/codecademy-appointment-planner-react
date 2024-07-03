import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({allContacts, newContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //Using hooks, check for contact name in the contacts array variable in props
  const [isInvalid, setIsInvalid] = useState(null)

  useEffect(() => {
    const contactExists = allContacts.some(contact => contact.name === name)
    if (contactExists) {
      setIsInvalid("This contact already exists!");
    } else {
      setIsInvalid(null);
    }
  }, [name, allContacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (!isInvalid) {
      newContact({name, phone, email});
      setName("");
      setPhone("");
      setEmail("");
    };
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName} 
          phone={phone} 
          setPhone={setPhone} 
          email={email} 
          setEmail={setEmail} 
          handleSubmit={handleSubmit}
          isInvalid={isInvalid}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={allContacts} />
      </section>
    </div>
  );
};
