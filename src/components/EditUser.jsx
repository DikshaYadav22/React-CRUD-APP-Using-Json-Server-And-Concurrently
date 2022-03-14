import axios from "axios";
import React, { memo, useState, useEffect } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = inputData;

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, inputData);
    navigate("/");
  };

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    if (res.data) {
      setInputData(res.data);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-center">Update User</h2>
      <Form className="p-3">
        <FormGroup>
          <Input
            id="name"
            name="name"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => inputHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="username"
            placeholder="Enter Your UserName"
            type="text"
            value={username}
            onChange={(e) => inputHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="email"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => inputHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="phone"
            placeholder="Enter Your Phone Number"
            type="number"
            value={phone}
            onChange={(e) => inputHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="website"
            placeholder="Enter Your Website Name"
            type="text"
            value={website}
            onChange={(e) => inputHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Button color="info" onClick={(e) => updateData(e)}>
            Update User
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
});

export default EditUser;
