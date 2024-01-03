import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobtitle: '',
      jobkey: '',
      location: '',
      jobtype: '',
      yearsofexp: '',
      jobsummary: '',
      responsibilities: '',
      requiredskills: '',
      tags: '',
      date: '',
      submitMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleJobTypeChange = (event) => {
    this.setState({ jobtype: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost/setup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(this.state).toString(),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        this.setState({
          jobtitle: '',
          jobkey: '',
          location: '',
          jobtype: '',
          yearsofexp: '',
          jobsummary: '',
          responsibilities: '',
          requiredskills: '',
          tags: '',
          date: '',
          
          submitMessage: 'New Job Posted Successfully',
        });

        // Show alert with OK and Cancel options
        const isConfirmed = window.confirm('New Job Posted Successfully. Do you want to perform additional actions?');

        if (isConfirmed) {
          // User clicked OK, you can perform additional actions here
          console.log('Additional actions can be performed here.');
        } else {
          // User clicked Cancel
          console.log('User clicked Cancel. No additional actions.');
        }
      } else {
        console.error('Error posting job:', response);
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Error posting job:', error.message);
      this.setState({
        submitMessage: 'Error posting job. Please try again.',
      });

      // Show alert with OK button
      window.alert('Error posting job. Please try again.');
    }
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Form">
          <h1>Job Details</h1>
          <hr />

          <div className="Form-field">
            <label htmlFor="jobtitle">Job Title</label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              placeholder="Add a job title"
              value={this.state.jobtitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="Form-field">
            <label htmlFor="jobkey">Job ID</label>
            <input
              type="text"
              name="jobkey"
              id="jobkey"
              placeholder="Add a job key"
              value={this.state.jobkey}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Add a job location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field">
            <label htmlFor="jobtype">Job Type</label>
            <select
              id="jobtype"
              value={this.state.jobtype}
              onChange={this.handleJobTypeChange}
              required
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>
          </div>

          <div className="Form-field">
            <label htmlFor="yearsofexp">Years of Experience</label>
            <input
              type="text"
              name="yearsofexp"
              id="yearsofexp"
              placeholder="Add required years of experience"
              value={this.state.yearsofexp}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field-large">
            <label htmlFor="jobsummary">Job Summary</label>
            <input
              type="text"
              name="jobsummary"
              id="jobsummary"
              placeholder="Add a job summary"
              value={this.state.jobsummary}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field-large">
            <label htmlFor="responsibilities">Responsibilities</label>
            <input
              type="text"
              name="responsibilities"
              id="responsibilities"
              placeholder="Enter key responsibilities"
              value={this.state.responsibilities}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field-large">
            <label htmlFor="requiredskills">Required Skills</label>
            <input
              type="text"
              name="requiredskills"
              id="requiredskills"
              placeholder="Add required skills"
              value={this.state.requiredskills}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="Form-field">
            <label htmlFor="tagsInput">Tags:</label>
            <input
              type="text"
              id="tagsInput"
              name="tags"
              value={this.state.tags}
              onChange={this.handleChange}
              placeholder="Add comma-separated tags"
            />
          </div>
          <div className="Form-field">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="Add posting date"
            />
          </div>

          <button type="submit">Post Job</button>
        </form>

      </div>
    );
  }
}


export default Form;
