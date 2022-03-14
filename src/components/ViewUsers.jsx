import React, { memo } from "react";
import { Table } from "reactstrap";

const ViewUsers = memo(({ users }) => {
  return (
    <div className="container mx-auto bg-light">
      <Table borderless style={{ boxShadow: "5px 10px 10px #E5E8E8" }}>
        <thead className="bg-dark text-white">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const { id, name, username, email, phone, website } = user;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
});

export default ViewUsers;
