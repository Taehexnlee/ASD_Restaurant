import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

export default function AccountPage() {
  let navigate = useNavigate();
  const { login, user } = useUser(); // Get user and login from context
  const [credentials, setCredentials] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    password: "", // Don't set existing password
  });

  const { name, username, email, password } = credentials;

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.name || !credentials.username || !credentials.email || !credentials.password) {
        alert("Field cannot be empty.");
        return; 
      }
    try {
      const result = await axios.put(`http://localhost:3000/user/${user.id}`, credentials); 
      // Updating details only works on my end if port is 8080
      login(result.data);  
      alert("User details updated successfully");
      navigate("/accountpage"); 
    } catch (error) {
      console.error("Error updating user:", error.response || error.message || error);
      if (error.response) {
        alert(`Error: ${error.response.data || 'Failed to update user details. Please try again.'} (Status: ${error.response.status})`);
      } else if (error.request) {
        alert("Error: No response from the server. Please check your network connection.");
      } else { //The response I was getting
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Account Settings</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.name || "Enter your name"}
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.username || "Enter your username"}
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.email || "Enter your email"}
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">Password</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.password || "Enter your password"}
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}