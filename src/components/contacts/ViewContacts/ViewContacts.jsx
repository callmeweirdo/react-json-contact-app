import React from "react";
import { Link } from "react-router-dom";
import "./ViewContact.css";

const ViewContacts = () => {
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
      <section className="view-contact-details my-3 ">
        <div className="container">
          <div className="row align-items-center  ">
            <div className="col-sm-5 col-md-3 ">
              <img
                src="../../../Weirdologo.png"
                alt=""
                className="view-contact-logo img-fluid "
              />
            </div>

            <div className="col-md-7">
              <div className="py-4">
                <ul className="list-group ">
                  <li className="list-group-item list-group-item-action ">
                    Name: <span className="fw-bold">Og</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Email: <span className="fw-bold">Og@gmail.com</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Number: <span className="fw-bold">101101101101</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Title: <span className="fw-bold">101101101101</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Company: <span className="fw-bold">101101101101</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Category: <span className="fw-bold">101101101101</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-3">
              <Link to={"/"} className="btn btn-success ">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContacts;
