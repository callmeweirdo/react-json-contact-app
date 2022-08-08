import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Spinner from "../../spiner/Spinner";

import { apiService } from "../../../server/apiServer";

import "./ContactList.css";

const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    erorMsg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const response = await apiService.getAllContacts();
        setState((prev) => ({
          ...prev,
          contacts: response.data,
          loading: false,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onDelete = async (contactId) => {
    try {
      const response = await apiService.deleteCotact(contactId);
      if (response) {
        const allContacts = await apiService.getAllContacts();
        setState((prev) => ({
          ...prev,
          contacts: allContacts.data,
          loading: false,
        }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        erorMsg: error.message,
      }));
    }
  };

  const { loading, contacts, erorMsg } = state;

  return (
    <>
      <section className="contact-search  p-3 ">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2 ">
                    <i className="fa fa-plus-circle me-2 " /> New
                  </Link>
                </p>
                <p className="fst-italic ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  corrupti eius possimus cum! Delectus inventore, corporis magni
                  ratione, maxime eveniet nesciunt aliquid vel quibusdam
                  doloribus repellat autem quisquam esse expedita!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row align-items-center ">
                  <div className="col ">
                    <div className="mb-2">
                      <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="search Contacts"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <button className="btn btn-outline-dark">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section className="contact-list">
          <div className="container">
            <div className="row">
              {contacts.map((contact) => (
                <ContactCard
                  onDelete={onDelete}
                  allContacts={contacts}
                  contact={contact}
                  key={contact.id}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactList;
