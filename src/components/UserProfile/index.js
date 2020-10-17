import React from 'react';
import './index.css';

export const UserProfile = ({user}) => {
  
  const {
    username,
    email,
    age,
    website,
    phone
  } = user;
  
  return (
    <article className="user-profile">
      <div className="user-profile-row">
        <dt className="user-profile-label"> Name:</dt>
        <dd className="user-profile-value"> {username} </dd>
      </div>
      <div className="user-profile-row">
        <dt className="user-profile-label"> Email:</dt>
        <dd className="user-profile-value"> {email} </dd>
      </div>
      <div className="user-profile-row">
        <dt className="user-profile-label"> Age:</dt>
        <dd className="user-profile-value"> {age} </dd>
      </div>
      
      <div className="user-profile-row">
        <dt className="user-profile-label"> Website:</dt>
        <dd className="user-profile-value"> {website} </dd>
      </div>
      <div className="user-profile-row">
        <dt className="user-profile-label"> Phone:</dt>
        <dd className="user-profile-value"> {phone} </dd>
      </div>
    </article>
  )
}
