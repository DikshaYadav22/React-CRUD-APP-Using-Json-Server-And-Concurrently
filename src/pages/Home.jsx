import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Home = ({ users, setUsers }) => {
  const deleteUser = (id) => {
    const deletedData = users.filter((data) => {
      return data.id !== id;
    });
    setUsers(deletedData);
  };

  return (
    <div>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const { id, name, username, email } = user;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  <Link to="/view/user">View</Link>
                </td>
                <td>
                  <Link to={`edit/user/${id}`}>Edit</Link>
                </td>
                <td>
                  <Button onClick={() => deleteUser(id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
