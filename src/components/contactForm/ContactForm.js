import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isInvalid
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        {isInvalid && <p style={{color: "red", fontSize: 10, marginTop: -7}}>{isInvalid}</p>}
        <input 
          type="number" 
          name="phone" 
          placeholder="Phone" 
          onChange={(e) => setPhone(e.target.value)} 
          value={phone}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

//TEST THE PHONE NUMBER