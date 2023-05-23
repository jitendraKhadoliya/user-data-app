import React from "react";
import "./userItem.css";

const UserItem = ({ user }) => {
  const { name, email, username, address, phone, website, company } = user;
  const formattedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  const formattedWebsite = website.startsWith("http")
    ? website
    : `https://${website}`;

  return (
    <div className="single-card">
      <div className="single-subCard">
        <div className="user-name">
          <h3>{name}</h3>
        </div>

        <div className="user-data">
          <span className="sub-heading">Email:</span> {email}
        </div>

        <div className="user-data">
          <span className="sub-heading">Username:</span> {username}
        </div>
        <div className="user-data">
          <span className="sub-heading">Address:</span>
          {formattedAddress}
        </div>
        <div className="user-data">
          <span className="sub-heading">Phone:</span>
          {phone}
        </div>

        {website && (
          <div className="user-data">
            <span className="sub-heading">Website:</span>
            <a
              href={formattedWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>
        )}

        <div className="user-data">
          <span className="sub-heading">Company:</span>
          {company.name}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
