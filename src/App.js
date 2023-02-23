import './App.css';
import About from './Component/About';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
import Alert from './Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'ParseUtils-Dark Mode';
      // setInterval(() => {
      //   document.title = 'ParseUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Download ParseUtils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'ParseUtils-Light Mode';
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title='ParseUtils' mode={mode} toggleMode={toggleMode} />
        {/* aboutText = "About ParseUtils" */}
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route path='/about' element={<About />} /> */}
            {/* <Route */}
              {/* path='/'
              // element={            
                <TextForm
                  showAlert={showAlert}
                  heading='Enter the text to analyse below'
                  mode={mode}
                />
              }
            />
          {/* </Routes> */}
          <TextForm
                  showAlert={showAlert}
                  heading='Enter the text to analyse below'
                  mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
