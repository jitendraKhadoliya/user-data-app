import React, { useState, useEffect } from "react";
import UserItem from "../userItem/UserItem";
import "./userList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h2 className="user-title">Our Users List</h2>

      <div className="all-card">
        {users?.map((user) => (
          // prop drilling here
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
