import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <section className="add-contacts p-3 ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="fw-bold h4 text-success ">Create conatcts</p>
              <div className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati unde perferendis recusandae commodi nulla repellendus
                doloremque quae possimus, accusantium soluta, excepturi dolores
                odio tenetur corrupti et inventore molestiae. Ut, cum?
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-6">
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
                <div className="mb-2">
                  <button className="btn btn-success me-2">Add</button>
                  <Link to={"/contacts/list"} className="btn btn-secondary">
                    Go To List
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;
