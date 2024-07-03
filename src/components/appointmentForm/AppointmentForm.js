import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  allContacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Appointment" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        <input 
          type="date" 
          name="date" 
          onChange={(e) => setDate(e.target.value)} 
          value={date}
          min={getTodayString()}
        />
        <input 
          type="time" 
          name="time" 
          onChange={(e) => setTime(e.target.value)} 
          value={time}
        />
        <ContactPicker allContacts={allContacts} value={contact} setContact={setContact} name={"contact"} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
