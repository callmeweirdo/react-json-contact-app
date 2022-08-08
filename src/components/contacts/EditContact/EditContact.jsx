import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { apiService } from "../../../server/apiServer";

const EditContact = () => {
  // let contacts = props.contacts;
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
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setState({ ...state, loading: true });
    const getContact = async () => {
      try {
        let response = await apiService.getContact(contactId);
        let groupResponse = await apiService.getGroups();
        let data = response.data;
        setState({
          ...state,
          loading: false,
          contact: data,
          groups: groupResponse.data,
        });
        console.log(state.groups);
      } catch (error) {
        setState({
          ...state,
          error: error,
        });
      }
    };

    getContact();
  }, [contactId]);

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
      const response = await apiService.updateContact(state.contact, contactId);
      if (response) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      setState({
        ...state,
        error: error.message,
      });
      navigate(`/contacts/edit/:${contactId}`, { replace: false });
    }
  };

  const { loading, error, contact } = state;

  return (
    <>
      <pre>{JSON.stringify(contact)}</pre>
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
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    id=""
                    value={contact.name}
                    placeholder="Enter Name"
                    className="form-control"
                    onChange={inputChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="photo"
                    id=""
                    value={contact.photo}
                    placeholder="Enter photoUrl"
                    className="form-control"
                    onChange={inputChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    name="email"
                    id=""
                    value={contact.email}
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={inputChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="mobile"
                    value={contact.mobile}
                    placeholder="Enter Company Name"
                    id=""
                    className="form-control"
                    onChange={inputChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    id=""
                    value={contact.title}
                    placeholder="Enter title"
                    className="form-control"
                    onChange={inputChange}
                  />
                </div>
                <div className="mb-2">
                  <select
                    value={contact.groupId}
                    name="groupId"
                    id=""
                    className="form-control"
                    onChange={inputChange}
                  >
                    {/* <option value={contact.groupId}>select category</option> */}
                    {state.groups.map((group) => (
                      <option value={group.id}>{group.name}</option>
                    ))}
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
                <img src={contact.photo} alt="" className="contact-logo " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
