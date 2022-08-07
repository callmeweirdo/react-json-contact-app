import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// componnts imports
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import AddContact from "./components/contacts/AddContacts/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import ViewContacts from "./components/contacts/ViewContacts/ViewContacts";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContacts />} />
      </Routes>
    </>
  );
};

export default App;
