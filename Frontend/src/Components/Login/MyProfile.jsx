import React, { useState, useRef } from "react";
import "./MyProfile.css"; // Import the CSS file for styling

const MyProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const defaultProfilePic = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [showEditPicOptions, setShowEditPicOptions] = useState(false);
  const fileInputRef = useRef(null);

  const handleEditProfile = () => {
    if (isEditModeEnabled)
    setIsEditMode(!isEditMode);
  };

  const handleCompleteProfile = () => {
    setIsEditMode(true);
  };

  const handleSaveProfile = () => {
    // Perform save logic here (e.g., API calls to update user data)
    setIsEditMode(false);
  };

  const handleEditProfilePic = () => {
    if (isEditMode) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveProfilePic = () => {
    setProfilePic(defaultProfilePic);
    setShowEditPicOptions(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setShowEditPicOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-image" onClick={handleEditProfilePic}>
          <img src={profilePic} alt="User" />
        </div>
        <div className="user-details">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {showEditPicOptions && (
          <div className="edit-pic-options">
            <button onClick={handleRemoveProfilePic}>Remove Profile Pic</button>
            <button onClick={() => fileInputRef.current.click()}>Import/Browse Pic</button>
          </div>
        )}
        <div className="user-details">
        <div className="details-section">
          <h2>Personal Details</h2>
          {(isEditMode || isEditModeEnabled)? (
            <>
              <div className="input-section">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-section">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-section">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="input-section">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="input-section">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-section">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-section">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Contact:</strong> {contact}
              </p>
              <p>
                <strong>Date of Birth:</strong> {dob}
              </p>
              <p>
                <strong>Gender:</strong> {gender}
              </p>
              <p>
                <strong>Address:</strong> {address}
              </p>
              <p>
                <strong>Nationality:</strong> {nationality}
              </p>
            </>
          )}
          </div>
        </div>
      </div>
      </div>
      <div className="profile-actions">
        {isEditMode ? (
          <button onClick={handleSaveProfile}>Save Profile</button>
        ) : (
          <>
            <button onClick={handleCompleteProfile}>Complete Profile</button>
            <button onClick={handleEditProfile}>Edit Profile</button>
          </>
        )}
        <button>Exit</button>
      </div>
    </div>
  );
};

export default MyProfile;
