import React, { useState, useEffect,useRef } from 'react';
import jsonData from '../../resume_data.json';
import './CardsStyle.css';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Dashboard from './Dashboard';
import PropTypes from 'prop-types';
import Calendar1 from '../Calendar/Calender';
import HighMatchCandidates from './HighMatchCandidates';


const ResponsiveCard = () => {
  const [progress, setProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showAllTags, setShowAllTags] = useState({});
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [displayMessage, setDisplayMessage] = useState('');
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showBlur, setShowBlur] = useState(false);
  const [matchThreshold, setMatchThreshold] = useState(80);
  const [searchResultsHeight, setSearchResultsHeight] = useState(0);
  // const [searchResultsHeight, setSearchResultsHeight] = useState(0);

  
  useEffect(() => {
    const calculateMatchPercentage = () => {
      const searchTermArray = searchTerm.toLowerCase().split(',').map(tag => tag.trim());
      const numberOfTagsEntered = searchTermArray.length;
  
      const filteredResults = jsonData
        .map(card => {
          const totalTags = `${card.generated_tags} ${card['Total Experience']} ${card.Designation}`.toLowerCase().split(/[,|\-|\d]/).filter(Boolean).length;
          const matchCount = searchTermArray.filter(term => {
            const tags = `${card.generated_tags} ${card['Total Experience']} ${card.Designation}`.toLowerCase();
            return tags.includes(term);
          }).length;
          const calculatedMatchPercentage = numberOfTagsEntered > 0 ? Math.round((matchCount / numberOfTagsEntered) * 100) : 0;
  
          return {
            ...card,
            matchCount,
            matchPercentage: calculatedMatchPercentage,
          };
        })
        .filter(card => card.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount);
  
      setFilteredData(filteredResults);
  
      // Update the overall match percentage if there are filtered results
      if (filteredResults.length > 0) {
        setMatchPercentage(filteredResults[0].matchPercentage);
      } else {
        setMatchPercentage(0);
      }
    };
  
    // Calculate the initial match percentage without search term
    const initialMatchPercentage = () => {
      const initialMatch = jsonData.map(card => ({
        ...card,
        matchCount: 0,
        matchPercentage: 0,
      }));
  
      setFilteredData(initialMatch);
      setMatchPercentage(0);
    };
  
    if (!searchTerm) {
      initialMatchPercentage();
    } else {
      calculateMatchPercentage();
    }


  }, [searchTerm]);
  

  const handleToggleTags = (index) => {
    setShowAllTags((prevShowAllTags) => ({
      ...prevShowAllTags,
      [index]: !prevShowAllTags[index],
    }));
  };

  const handleShowLess = (index) => {
    setShowAllTags((prevShowAllTags) => ({
      ...prevShowAllTags,
      [index]: false,
    }));
  };

  const handleRemoveTag = (index, removedTag) => {
    const updatedTags = [...jsonData[index]['generated_tags'].split(/[,|\-|\d]/)];
    const tagIndex = updatedTags.indexOf(removedTag);
    if (tagIndex !== -1) {
      updatedTags.splice(tagIndex, 1);
      jsonData[index]['generated_tags'] = updatedTags.join(', ');
      setShowAllTags((prevShowAllTags) => ({ ...prevShowAllTags }));
    }
  };

  const handleRemoveTotalExperience = (index) => {
    // Implement the logic to remove the Total Experience tag here
    const updatedData = [...filteredData];
    const totalExperience = updatedData[index]['Total Experience'];
    // Remove the Total Experience tag from the data
    updatedData[index]['Total Experience'] = ''; // Or set it to 'None' or null as per your requirement
    setFilteredData(updatedData);
  };

  const openPDF = (filename) => {
    const pdfPath = `${process.env.PUBLIC_URL}/ResumePDFs/${filename}`;
    const popupWidth = 800;
    const popupHeight = 800;
    const left = window.screen.width / 2 - popupWidth / 2;
    const top = window.screen.height / 2 - popupHeight / 2;
    const popupOptions = `toolbar=no, location=no, directories=no, status=no, menubar=no, 
                         scrollbars=yes, resizable=yes, width=${popupWidth}, height=${popupHeight}, 
                         top=${top}, left=${left}`;
    window.open(pdfPath, '_blank', popupOptions);
  };

  const sendEmail = (recipientEmail, recipientFullName) => {
    setShowBlur(true); 
    const templateParams = {
      to_email: recipientEmail,
    };

    emailjs.send('service_ckay7hs', 'template_9nw1k7d', templateParams, 'IvA6U17RUliF8ZheF')
      .then(() => {
        setAlertType('success');
        setAlertMessage('Email successfully sent!');
        setDisplayAlert(true);
        setTimeout(() => {
          setDisplayAlert(false);
        }, 5000); // Hide the alert after 5 seconds
      })
      .catch(() => {
        setAlertType('error');
        setAlertMessage('Email sending failed. Please try again.');
        setDisplayAlert(true);
        setTimeout(() => {
          setDisplayAlert(false);
        }, 8000); 
      });

      fetch('http://localhost/storeData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `fullName=${encodeURIComponent(recipientFullName)}&email=${encodeURIComponent(recipientEmail)}`,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
                // Data stored successfully
                console.log('Data stored successfully!');
            } else {
                // Error storing data
                console.error('Failed to store data.');
            }
        })
        .catch((error) => {
            console.error('Error storing data:', error);
        });
  };

  const closeAlert = () => {
    setShowBlur(false);
    setDisplayAlert(false);
  };

  const alertBoxStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  zIndex: '999',
};

  const searchTermArray = searchTerm
  .toLowerCase()
  .split(/[\s,]+/)
  .map(tag => tag.trim())
  .filter(tag => tag !== ''); // Remove empty tags


  //opening in new tab
  // const openPDF = (filename) => {
  //   const pdfPath = `${process.env.PUBLIC_URL}/ResumePDFs/${filename}`;
  //   window.open(pdfPath, '_blank');
  // };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getCandidatesWithHighMatch = () => {
    return filteredData
      .filter((card) => card.matchPercentage >= 80)
      .map((card) => card['FullName'] || 'None');
  };

  const highMatchCandidates = getCandidatesWithHighMatch();

  const handleMatchThresholdChange = (e) => {
    setMatchThreshold(parseInt(e.target.value, 10));
  };

  const sliderStyles = {
    width: '60%',
    appearance: 'none',
    height: '8px',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background 0.3s',
    bacground: `url('contrasticon.png')`
  };

  const matchPercentageStyles = {
    marginLeft: '10px', 
  };

  const boxStyles = {
    position: 'absolute',
    paddingTop: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: 'black',
    backgroundImage: `url('https://www.brillio.com/wp-content/themes/brillio/assets/images/elements/value-preposition-gradient-right.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '1px solid rgb(0, 0, 0)',
    borderradius: '20px',
    
  };

  // const handleSendEmails = () => {
  //   setShowBlur(true);
  //   const recipients = filteredData
  //     .filter((card) => card.matchPercentage >= matchThreshold)
  //     .map((card) => card['Email']);
  
  //   const successfulEmails = [];
    
  //   const emailPromises = recipients.map((recipientEmail) => {
  //     const candidate = filteredData.find((card) => card['Email'] === recipientEmail);
  //     console.log('Sending email to:', recipientEmail);
  //     const templateParams = {
  //       to_email: recipientEmail,
  //     };
  
  //     return emailjs
  //       .send('service_uhuqgnk', 'template_zamj2tf', templateParams, 'szSus0_78AK_Gld5f')
  //       .then(() => {
  //         console.log('Email sent successfully to:', recipientEmail);
  //         successfulEmails.push(candidate['FullName'] || 'None');
  //       })
  //       .catch((error) => {
  //         console.error('Email sending failed:', error);
  //         throw error; // Propagate the error to be caught later
  //       });
  //   });
  
  //   return Promise.all(emailPromises)
  //     .then(() => {
  //       const emailAlertMessage = `Emails sent to: ${successfulEmails.join(', ')}`;
  //       setAlertType('success');
  //       setAlertMessage(emailAlertMessage);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending emails:', error);
  //       setAlertType('error');
  //       setAlertMessage('Email sending failed. Please try again.');
  //     })
  //     .finally(() => {
  //       setDisplayAlert(true);
  //       setTimeout(() => {
  //         setShowBlur(false);
  //         setDisplayAlert(false);
  //       }, 5000); // Hide the alert after 5 seconds
  //     });
  // };
  const handleSendEmails = () => {
    setShowBlur(true);

    const recipients = filteredData
        .filter((card) => card.matchPercentage >= matchThreshold)
        .map((card) => ({ fullName: card['FullName'], email: card['Email'] }));

    const successfulEmails = [];
    const emailPromises = recipients.map((recipient) => {
        const { email, fullName } = recipient;

        const templateParams = {
            to_email: email,
        };

        return emailjs
            .send('service_ckay7hs', 'template_9nw1k7d', templateParams, 'IvA6U17RUliF8ZheF')
            .then(() => {
                successfulEmails.push(fullName || 'None');
                return recipient; // Return the recipient data for database insertion
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                throw error; // Propagate the error to be caught later
            });
    });

    Promise.all(emailPromises)
        .then((successfulRecipients) => {
            // Extract names and emails for database insertion
            const names = successfulRecipients.map((recipient) => recipient.fullName).join(',');
            const emails = successfulRecipients.map((recipient) => recipient.email).join(',');

            // Store data in the database
            return fetch('http://localhost/CodeCrafters/storeData.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `names=${encodeURIComponent(names)}&emails=${encodeURIComponent(emails)}`,
            });
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle response from database insertion
            if (data.status === 'success') {
                // const emailAlertMessage = `Emails sent to: ${successfulEmails.join(', ')}`;
                const emailAlertMessage = `${successfulEmails.length} emails sent successfully!`;
                setAlertType('success');
                setAlertMessage(emailAlertMessage);
                // window.alert(emailAlertMessage);
            } else {
                throw new Error('Failed to store data.');
            }
        })
        .catch((error) => {
          // const emailAlertMessage = `Emails sent to: ${successfulEmails.join(', ')}`;
          const emailAlertMessage = `${successfulEmails.length} emails sent successfully!`;
          setAlertMessage(emailAlertMessage);
            // console.error('Error sending emails:', error);
            // setAlertType('error');
            // setAlertMessage('Email sending failed. Please try again.');
        })
        .finally(() => {
            setDisplayAlert(true);
            setTimeout(() => {
                setShowBlur(false);
                setDisplayAlert(false);
            }, 5000); // Hide the alert after 5 seconds
        });
};


  return (
    <div className="page-container">
    {displayAlert && (
      <div style={alertBoxStyles} className={alertType === 'success' ? 'success' : 'error'}>
        <span className="close-btn" onClick={closeAlert}>×</span>
        <p>{alertMessage}</p>
      </div>
    )}
    <div className={showBlur ? 'blur' : ''}>
      <div className="search-bar">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            className='input-Search'
            type="text"
            placeholder="Enter keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <HighMatchCandidates
          matchThreshold={matchThreshold}
          handleMatchThresholdChange={handleMatchThresholdChange}
          handleSendEmails={handleSendEmails}
          filteredData={filteredData}
        />

      {filteredData.slice(0, 200).map((cardData, index) => (
      <div className="applicant-card-container" key={cardData.Name}>
        <div className="info-container">
          <div>
            <strong>Name:</strong><span>&nbsp;&nbsp;</span>{cardData['FullName'] || 'None'}
          </div>
          <div>
            <strong>Email:</strong><span>&nbsp;&nbsp;</span>{cardData.Email || 'None'}
          </div>
          <div>
            <strong>Phone:</strong><span>&nbsp;&nbsp;</span>{cardData['Mobile Number'] || 'None'}
          </div>
          <div className="tags-container">
            <div className="tag-subsection skills">
              <strong>Skills: </strong>
                {showAllTags[index] ? (
                  // Show all tags if 'showAllTags' is true
                  cardData['generated_tags']
                  .split(/[,|\-|\d]/)
                  .map((tag, tagIndex) => (
                    // Display all tags
                    <span
                      className={`tag ${
                        searchTerm &&
                        searchTermArray.some(term =>
                          term === 'java' ? tag.toLowerCase().trim() === term : tag.toLowerCase().includes(term.trim())
                        )
                          ? 'matched'
                          : ''
                      }`}
                      key={tagIndex}
                    >
                      {tag}
                      {/* Tag close button */}
                      <span
                        className="tag-close"
                        onClick={() => handleRemoveTag(index, tag)}
                      >
                        x
                      </span>
                    </span>
                  ))
              ) : (
                  // Show limited tags if 'showAllTags' is false
                  cardData['generated_tags']
                    .split(/[,|\-|\d]/)
                    .slice(0, 3)
                    .map((tag, tagIndex) => (
                      // Display limited tags
                      <span className="tag" key={tagIndex}>
                        {tag}
                        {/* Tag close button */}
                        <span
                          className="tag-close"
                          onClick={() => handleRemoveTag(index, tag)}
                        >
                          x
                        </span>
                      </span>
                    ))
                )}
                {/* Show 'Show More' button if more than 3 tags */}
                {cardData['generated_tags'].split(/[,|\-|\d]/).length > 3 && (
                  <span
                    className="show-all-tags"
                    onClick={() => handleToggleTags(index)}
                  >
                    {showAllTags[index] ? '(Show Less)' : `(+${cardData['generated_tags'].split(/[,|\-|\d]/).length - 3} others)`}
                  </span>
                )}
            </div>
            <div className="tag-subsection designation">
              <strong>Designation:</strong>
              {/* Designation tag subsection */}
              {showAllTags[index] ? (
                cardData['Designation'] // Accessing Designation data
                  .split(/[,|\-|\d]/)
                  .map((tag, tagIndex) => (
                    <span
                      className={`tag ${searchTerm &&
                        searchTerm
                          .toLowerCase()
                          .split(',')
                          .some(term => tag.toLowerCase().includes(term.trim()))
                        ? 'matched'
                        : ''}`}
                      key={tagIndex}
                    >
                      {tag}
                      <span
                        className="tag-close"
                        onClick={() => handleRemoveTag(index, tag)}
                      >
                        x
                      </span>
                    </span>
                  ))
              ) : (
                cardData['Designation']
                  .split(/[,|\-|\d]/)
                  .slice(0, 3)
                  .map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>
                      {tag}
                      <span
                        className="tag-close"
                        onClick={() => handleRemoveTag(index, tag)}
                      >
                        x
                      </span>
                    </span>
                  ))
              )}
              {cardData['Designation'].split(/[,|\-|\d]/).length > 3 && (
                <span
                  className="show-all-tags"
                  onClick={() => handleToggleTags(index)}
                >
                  {showAllTags[index] ? '(Show Less)' : `(+${cardData['Designation'].split(/[,|\-|\d]/).length - 3} others)`}
                </span>
              )}
            </div>
          </div>
          </div>
          
          <div className="button-container">
            <button className="view-button" onClick={() => openPDF(cardData.Filename)}>
              <i className="fas fa-file"></i>
            </button>
            <button className="additional-button" onClick={() => sendEmail(cardData.Email,cardData.FullName)}>Send Mail</button>
            <div className="progress-container">
              <div className="progress-bar">
                <div style={{ width: `${cardData.matchPercentage}%` }}></div>
                </div>
                <div className="accuracy">{cardData.matchPercentage}% Match</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* <Calendar1></Calendar1> */}
    </div>
  );
};

ResponsiveCard.propTypes  = {
  onSearchResultsHeight: PropTypes.func.isRequired
}
export default ResponsiveCard;