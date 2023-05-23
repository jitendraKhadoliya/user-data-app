import React from "react";
import UserItem from "../userItem/UserItem";
import "./userList.css";
import useFetchData from "../../utils/useFetchData";

const UserList = () => {
  // accessing endPoint from .env file
  const endPoint = process.env.REACT_APP_ENDPOINT;
  // fetching users data
  const { data: users, isLoading, error } = useFetchData(endPoint);

  // * create new component to show loading icon in next update
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // * create new component to show error in next update
  if (error) {
    return <div>Error: {error.message}</div>;
  }
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
