
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');// state variable states weather dark mode enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
    msg: message,
    type: type    
    })
    setTimeout(() => {
      setAlert(null); 
    }, 1500);
  }

// IT is a function used to change the dark mode if switch press by onclick function in navbar component used as props
  const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#123045';
    showAlert("Dark Mode has been Enabled","success");
    // document.title = "TextUtils - DarkMode";
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install TextUtils";
    // }, 1500);
  }
  else{ 
    setMode('light'); 
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been Enabled","success");
    // document.title = "TextUtils - LightMode";
  }
  }
  return (
    // exact help to render same required page
    <>
    <Router>
    <Navbar title ='Textutils' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path='/' element={<TextArea showAlert = {showAlert} heading = "Try TextUtils  - Word Counter ,Character Counter , Remove Extra Space"   mode={mode} />} />
      <Route exact path='/About' element={<About mode={mode} />} />
    </Routes>
    {/* <About/> */}
    </div> 
    </Router>
    </> 
  ); 
}

export default App;
