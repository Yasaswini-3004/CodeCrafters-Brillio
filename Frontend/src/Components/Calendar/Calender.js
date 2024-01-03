import React, { useState, useEffect} from 'react';
import './CalenderStyles.css'; 

const Calendar1 = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({});
  const [emailCount, setEmailCount] = useState(null);
  const [jobTitles, setJobTitles] = useState([]);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [showTaskDisplay, setShowTaskDisplay] = useState(false);

  const handleDayHover = (day) => {
    setHoveredDay(day);
    if (!selectedDay) {
      setShowTaskDisplay(false); // Hide task display when hovering without selection
    }
    handleDayClick(day); 
  };

  const handleDayMouseLeave = () => {
    setHoveredDay(null);
  };

  const fetchEmailCount = async () => {
    if (selectedDay) {
      const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;

      try {
        const response = await fetch(`http://localhost/CodeCrafters/getEmailCount.php?date=${formattedDate}`);
        const data = await response.json();

        if (data.status === 'success') {
          setEmailCount(data.count);
        } else {
          // Handle error
        }
      } catch (error) {
        console.error('Error fetching email count:', error);
        // Handle error
      }
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // const handleDayClick = (day) => {
  //   setSelectedDay(day);
  //   //setNewTask('');
  // };

  const handleDayClick = async (day) => {
    setSelectedDay(day);
  
    const formattedDate = `${selectedYear}-${selectedMonth}-${day}`;
  
    try {
      const response = await fetch(`http://localhost/CodeCrafters/getJobTitles.php?date=${formattedDate}`);
      const data = await response.json();
  
      if (data.length > 0) {
        setJobTitles(data); // Set job titles fetched for the selected day
      } else {
        setJobTitles([]); // Reset job titles if none found for the selected day
      }
    } catch (error) {
      console.error('Error fetching job titles:', error);
      // Handle error
    }
  };

  const handleCloseClick = () => {
    setSelectedDay(null);
    setShowTaskDisplay(false); 
  };

  // const handleAddTask = () => {
  //   if (selectedDay) {
  //     setTasks((prevTasks) => ({
  //       ...prevTasks,
  //       [`${selectedYear}-${selectedMonth}-${selectedDay}`]: newTask,
  //     }));
  //   }
  // };

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = () => {
  const year = selectedYear;
  const month = selectedMonth - 1;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month, daysInMonth(year, month));

  const startOffset = firstDay.getDay();
  const endOffset = 6 - lastDay.getDay();

  const totalDays = daysInMonth(year, month);
  const prevMonthDays = daysInMonth(year, month - 1);

  const data = [];
  let day = 1;

  for (let i = prevMonthDays - startOffset + 1; i <= prevMonthDays; i++) {
    data.push({ day: i, isCurrentMonth: false, dayOfWeek: '' });
  }

  for (let i = 1; i <= totalDays; i++) {
    const currentDate = new Date(year, month, i);
    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'short' });
    data.push({ day: i, isCurrentMonth: true, dayOfWeek });
  }

  for (let i = 1; i <= endOffset; i++) {
    data.push({ day: i, isCurrentMonth: false, dayOfWeek: '' });
  }

  return data;
  };

  useEffect(() => {
    fetchEmailCount();
  }, [selectedDay]);

  return (
    <div className="calendar">
      <div className="calendar-controls"><select value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <select value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-grid">
        {getMonthData().map((dayData, index) => (
          <div
          key={index}
          className={`calendar-day ${dayData.isCurrentMonth ? 'current-month' : 'other-month'}`}
          onClick={() => handleDayClick(dayData.day)}
          onMouseEnter={() => handleDayHover(dayData.day)}
          onMouseLeave={handleDayMouseLeave}
          data-day={dayData.dayOfWeek}
        >
          <div className="date">{dayData.day}</div>
          <div className="day-of-week">{dayData.dayOfWeek}</div>
          {hoveredDay === dayData.day && (
              <div className="hover-info">
                {/* Display job titles and email counts here */}
                {jobTitles.length > 0 ? (
                  <>
                    <h3>Jobs Added on {selectedYear}-{selectedMonth}-{dayData.day}</h3>
                    <ul>
                      {jobTitles.map((title, index) => (
                        <li key={index}>{title}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>No jobs added on {selectedYear}-{selectedMonth}-{dayData.day}</p>
                )}
                <br></br>
                {/* <h3>Total emails sent</h3> */}
                <p>
                  {emailCount !== null ? (
                    emailCount > 0 ? (
                      <>
                        Total emails sent: <span className="white-text">{emailCount}</span>
                      </>
                    ) : (
                      'No emails sent'
                    )
                  ) : (
                    'Loading...'
                  )}
                </p>
              </div>
            )}
        </div>
        ))}
      </div>  
      {selectedDay && (
        <div className="task-display">
          {jobTitles.length > 0 ? (
          <>
            <h3>Jobs Added on {selectedYear}-{selectedMonth}-{selectedDay}</h3>
            <ul>
              {jobTitles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>No jobs added on {selectedYear}-{selectedMonth}-{selectedDay}</p>
        )}
        <br></br>
          {/* <h3>Total emails sent</h3> */}
          {/* <p>{emailCount !== null ? (emailCount > 0 ? `Total emails sent: ${emailCount}` : 'No emails sent ') : 'Loading...'}</p> */}
          <p>
            {emailCount !== null ? (
              emailCount > 0 ? (
                <>
                  <span className="green-text">Total emails sent: <span className="white-text">{emailCount}</span></span>
                </>
              ) : (
                'No emails sent'
              )
            ) : (
              'Loading...'
            )}
          </p>
          <button className="calendar-close-button" onClick={handleCloseClick}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar1;

