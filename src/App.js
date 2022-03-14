import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuBar from "./layouts/MenuBar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUsers from "./components/ViewUsers";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3003/users`);
    if (res.data) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <MenuBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home users={users} setUsers={setUsers} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/add/user" element={<AddUser />} />
          <Route exact path="/edit/user/:id" element={<EditUser />} />
          <Route
            exact
            path="/view/user"
            element={<ViewUsers users={users} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
