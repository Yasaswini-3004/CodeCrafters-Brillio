import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './MyProfileStyles.css';

const MyProfile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMyProfileClick = () => {
    console.log('My Profile clicked');
  };

  const handleLogoutClick = () => {
    console.log('Log Out clicked');
  };

  return (
    <div className="profile-button">
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUserCircle} style={{ color: '#e1e1e5' }} />
      </button>
      {dropdownVisible && (
        <div className="dropdown">
          <button onClick={handleMyProfileClick}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
            My Profile
          </button>
          <button onClick={handleLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '8px' }} />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
