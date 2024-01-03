import './App.css';
import './styles.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Components/JobUpload/Form.jsx';
import UploadFiles from './Components/ResumeUpload/UploadFiles.jsx';
import Jobdetails from './Components/ViewJobs/Jobdetails.jsx';
import Home from './Components/Home.jsx'; // Create a Home component for the root path
import Navbar from './Components/Navbar/Navbar.js';
import JobDesc from './Components/ViewJobs/JobDesc.jsx';
import AuthContainer from './Components/Login/AuthContainer.js';


function App() {
  return (
    <div className="App">
      <AuthContainer />
    </div>
  );
}

export default App;

// export default function App(){
//   return(
//     <div className="App">
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Jobdetails" element={<Jobdetails />} />
//         <Route path="/ViewJobs/JobDesc/:jobTitle" element={<JobDesc />} />
//         <Route path="/Form" element={<Form />} />
//         <Route path="/UploadFiles" element={<UploadFiles />} />
//       </Routes>
//     </div>
//   );
// }

