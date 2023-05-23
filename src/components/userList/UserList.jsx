import React from "react";
import UserItem from "../userItem/UserItem";
import "./userList.css";
import useFetchData from "../../utils/useFetchData";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const UserList = () => {
  const endPoint = process.env.REACT_APP_ENDPOINT;
  const { data: users, isLoading, error } = useFetchData(endPoint);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error msg={error.message} />;
  }

  return (
    <div>
      <h2 className="user-title">Our Users List</h2>

      <div className="all-card">
        {users?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
