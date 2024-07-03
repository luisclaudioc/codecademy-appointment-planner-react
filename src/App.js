import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ allContacts, setAllContacts ] = useState(localStorage.getItem("allContacts") || []);
  const [ allAppointments, setAllAppointments ] = useState(localStorage.getItem("allAppointments") || []);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const newContact = (contact) => {
    setAllContacts((prev) => [...prev, contact]);
  };

  const newAppointment = (appointment) => {
    setAllAppointments((prev) => [...prev, appointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage allContacts={allContacts} newContact={newContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage allContacts={allContacts} allAppointments={allAppointments} newAppointment={newAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
