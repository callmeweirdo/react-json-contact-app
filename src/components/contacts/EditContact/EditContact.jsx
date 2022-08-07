import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <>
      <section className="add-contacts p-3 ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="fw-bold h4 text-primary ">Edit Conatcts</p>
              <div className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati unde perferendis recusandae commodi nulla repellendus
                doloremque quae possimus, accusantium soluta, excepturi dolores
                odio tenetur corrupti et inventore molestiae. Ut, cum?
              </div>
            </div>
          </div>

          <div className="row my-3 align-items-center ">
            <div className="col-md-4">
              <form action="">
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Name"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="photoUrl"
                    id=""
                    placeholder="Enter photoUrl"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Email"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter Company Name"
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter title"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <select name="category" id="" className="form-control">
                    <option value="">select category</option>
                  </select>
                </div>
                <div className="mb-2 my-4 ">
                  <button className="btn btn-primary me-2">Update</button>
                  <Link to={"/contacts/list"} className="btn btn-secondary">
                    Go To List
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-7">
              <div className="mb-2">
                <img
                  src="../../../Weirdologo.png"
                  alt=""
                  className="contact-logo "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
