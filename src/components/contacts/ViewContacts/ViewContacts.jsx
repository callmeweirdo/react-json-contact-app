import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiService } from "../../../server/apiServer";
import Spinner from "../../spiner/Spinner";
import "./ViewContact.css";

const ViewContacts = () => {
  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
    error: "",
  });
  const { contactId } = useParams();

  useEffect(() => {
    setState({ ...state, loading: true });
    const getContact = async () => {
      try {
        let response = await apiService.getContact(contactId);
        let data = response.data;
        let groupResponse = await apiService.getGroupId(data.groupId);
        let groupData = groupResponse.data;
        console.log("====================================");
        console.log(data, groupData);
        console.log("====================================");
        setState({
          ...state,
          loading: false,
          contact: data,
          group: groupData,
        });
      } catch (error) {
        setState({
          ...state,
          error: error,
        });
      }
    };

    getContact();
  }, [contactId]);

  const { loading, error, contact, group } = state;

  return (
    <>
      <section className="view-contact">
        <div className="container">
          <div className="row">
            <div className="col py-3 ">
              <p className="h4 fw-bold text-secondary ">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                possimus pariatur perferendis optio, ex officia error voluptas
                consequuntur, sed cupiditate molestias praesentium ipsa adipisci
                ut consequatur repellendus ducimus, assumenda ea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section className="view-contact-details my-3 ">
          <div className="container">
            <div className="row align-items-center  ">
              {contact && group && (
                <>
                  <div className="col-sm-5 col-md-3 ">
                    <img
                      src={contact.photo}
                      alt=""
                      className="view-contact-logo img-fluid "
                    />
                  </div>

                  <div className="col-md-7">
                    <div className="py-4">
                      <ul className="list-group ">
                        <li className="list-group-item list-group-item-action ">
                          Name: <span className="fw-bold">{contact.name} </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email:{" "}
                          <span className="fw-bold">{contact.email}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Number:{" "}
                          <span className="fw-bold">{contact.mobile} </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Title:{" "}
                          <span className="fw-bold">{contact.title} </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Company:{" "}
                          <span className="fw-bold"> {contact.company} </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Category:{" "}
                          <span className="fw-bold">{group.name} </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div className="my-3">
                <Link to={"/"} className="btn btn-success ">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewContacts;
