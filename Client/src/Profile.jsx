// Profile.js
import React, { useState } from 'react';
import './profile.css';

function Profile() {
  // Sample user data, replace with actual data fetching or state management
  const [user, setUser] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send data to server)
    console.log('Updated user information:', user);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-form-group">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={user.fname}
            placeholder='Enter First name'
            onChange={handleChange}
          />
        </div>
        <div className="profile-form-group">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={user.lname}
            placeholder='Enter Last name'
            onChange={handleChange}
          />
        </div>
        <div className="profile-form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="profile-form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />
        </div>
        <div className="profile-form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            placeholder='Enter Address'
            onChange={handleChange}
          />
        </div>
        <div className="profile-form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            placeholder='Enter Phone Number'
            onChange={handleChange}
          />
        </div>
        <div className="profile-form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={user.bio}
            placeholder='Enter Bio'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
