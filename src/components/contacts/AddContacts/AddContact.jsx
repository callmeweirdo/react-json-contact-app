import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../../../server/apiServer";

const AddContact = () => {
  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      email: "",
      mobile: "",
      title: "",
      photo: "",
      company: "",
      groupId: "",
    },
    groups: [],
    error: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getGroups = async () => {
      try {
        setState({
          ...state,
          loading: true,
        });
        const response = await apiService.getGroups();
        setState({
          ...state,
          groups: response.data,
        });
        console.log(state.groups);
      } catch (error) {
        setState({
          ...state,
          error: error,
        });
      }
    };
    getGroups();
  }, []);

  const inputChange = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.addContact(state.contact);
      if (response) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      setState({
        ...state,
        error: error.message,
      });
      navigate("/contacts/add", { replace: false });
    }
  };

  const { name, email, photo, mobile, company, title, groupId } = state.contact;
  const { groups } = state;

  return (
    <>
      <pre>{JSON.stringify(state.contact)}</pre>
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
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputChange}
                    id=""
                    placeholder="Enter Name"
                    className="form-control"
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="photo"
                    id=""
                    placeholder="Enter photoUrl"
                    className="form-control"
                    type="text"
                    value={photo}
                    onChange={inputChange}
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Email"
                    className="form-control"
                    value={email}
                    onChange={inputChange}
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    id=""
                    className="form-control"
                    value={mobile}
                    onChange={inputChange}
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Enter title"
                    className="form-control"
                    value={title}
                    onChange={inputChange}
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="company"
                    id=""
                    placeholder="Enter Company"
                    className="form-control"
                    value={company}
                    onChange={inputChange}
                    required={true}
                  />
                </div>
                <div className="mb-2">
                  <select
                    name="groupId"
                    id=""
                    className="form-control"
                    value={groupId}
                    onChange={inputChange}
                  >
                    <option value="">select category</option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
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
