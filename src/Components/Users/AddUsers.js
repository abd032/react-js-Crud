import axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

function AddUsers() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e=>{
e.preventDefault();
await axios.post("http://localhost:3003/users",user);
history.push('/')
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"> Add A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={onInputChange}
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary btn-block">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;
