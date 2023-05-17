import React from "react";
import "./userItem.css";

const UserItem = ({ user }) => {
  // here I am defining Website link
  const website = user.website.startsWith("http")
    ? user.website
    : `https://${user.website}`;

  return (
    <div className="single-card">
      <div className="single-subCard">
        <div className="user-name">
          <h3>{user.name}</h3>
        </div>
        <div className="user-data">
          <span className="sub-heading">Email:</span> {user.email}
        </div>

        <div className="user-data">
          <span className="sub-heading">Username:</span> {user.username}
        </div>
        <div className="user-data">
          <span className="sub-heading">Address:</span>
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </div>
        <div className="user-data">
          <span className="sub-heading">Phone:</span>
          {user.phone}
        </div>

        {/* double check on web site */}
        {website && (
          <div className="user-data">
            <span className="sub-heading">Website:</span>

            <a href={website} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </div>
        )}
        <div className="user-data">
          <span className="sub-heading">Company:</span>
          {user.company.name}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
