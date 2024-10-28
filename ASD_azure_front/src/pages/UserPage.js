import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserPage() {

  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ email: "" });
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => { //Run handleFilterChange() when change detected in filter variables
    const filterEmail = (users) => { //Filter by Email
      if (filters.email !== "") {
        return users.filter(user => user.email.toLowerCase().startsWith(filters.email.toLowerCase())); //filter by email
      }
      else {
        return users;
      }
    }

    const handleFilterChange = (e) => { //Run all filters against users
      let filtered = users;
      filtered = filterEmail(filtered);
      setFilteredUsers(filtered);
    }

    handleFilterChange();
  }, [filters, users]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");

    // Filter out the admin account based on the "1234" condition
    const filterAdmin = result.data.filter(
      (u) => !(u.name === "1234" && u.username === "Admin" && u.email === "1234@1234")
    );
    setUsers(filterAdmin);
    setFilteredUsers(filterAdmin);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  const filterChange = (e) => { //Update filter variables on input field change
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <h1>Viewing Users</h1>
      <input onChange={filterChange} type="text" id="email" name="email" placeholder="Filter by email..." />
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
