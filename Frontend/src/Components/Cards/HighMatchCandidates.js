import React from 'react';
import PropTypes from 'prop-types';

const HighMatchCandidates = ({
  matchThreshold,
  handleMatchThresholdChange,
  handleSendEmails,
  filteredData,
}) => {
    const sliderStyles = {
        width: '60%',
        appearance: 'none',
        height: '8px',
        borderRadius: '5px',
        outline: 'none',
        transition: 'background 0.3s',
        bacground: `url('contrasticon.png')`,
        padding: '0px',

      };
      const matchPercentageStyles = {
        marginLeft: '10px', 
        color: 'white',
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

      const getCandidatesWithHighMatchCount = () => {
        return filteredData.filter((card) => card.matchPercentage >= matchThreshold).length;
      };
    
      const highMatchCount = getCandidatesWithHighMatchCount();

      const h3Style = {
        color: 'white',
      };

  return (
    <div className="candidates-high-match" style={boxStyles}>
      <div className="match-slider">
        <input
          type="range"
          min="1"
          max="100"
          value={matchThreshold}
          onChange={handleMatchThresholdChange}
          step="1"
          style={sliderStyles}
        />
        <span style={matchPercentageStyles}>{matchThreshold}%</span>
        <button className="additional-button-all" onClick={handleSendEmails}>
          Send Mails
        </button>
      </div>

      <div className="candidates-list">
      <h3 style={h3Style}>No of candidates with {matchThreshold}% or above match: {highMatchCount}</h3>
        {/* <h3>Candidates with {matchThreshold}% or above match:</h3> */}
        <ul>
          {filteredData
            .filter((card) => card.matchPercentage >= matchThreshold)
            .map((card) => (
              <li key={card['FullName']} style={{ color: '#707070' }}>
                {card['FullName'] || 'None'}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

HighMatchCandidates.propTypes = {
    matchThreshold: PropTypes.number.isRequired,
    handleMatchThresholdChange: PropTypes.func.isRequired,
    handleSendEmails: PropTypes.func.isRequired,
    filteredData: PropTypes.array.isRequired,
  };
export default HighMatchCandidates;
