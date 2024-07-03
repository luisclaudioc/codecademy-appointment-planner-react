import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({allContacts, allAppointments, newAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newAppointment({name, contact, date, time});
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          name={name} 
          setName={setName} 
          contact={contact} 
          setContact={setContact} 
          date={date} 
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          allContacts={allContacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={allAppointments} />
      </section>
    </div>
  );
};