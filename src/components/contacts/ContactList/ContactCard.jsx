import React from "react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center d-flex justify-content-around ">
              <div className="col-md-4">
                <img
                  src="../../../Weirdologo.png"
                  alt=""
                  className="contact-logo "
                />
              </div>
              <div className="col-md-7">
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
                </ul>
              </div>
              <div className="col-md-1 flex-column d-flex align-items-center ">
                <Link
                  to={"/conatcts/view/:123456"}
                  className="btn btn-warning my-1 "
                >
                  <i className="fa fa-eye"></i>
                </Link>
                <Link
                  to={"/conatcts/view/:123456"}
                  className="btn btn-primary my-1"
                >
                  <i className="fa fa-pen"></i>
                </Link>
                <Link
                  to={"/conatcts/view/:123456"}
                  className="btn btn-danger my-1"
                >
                  <i className="fa fa-trash"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;