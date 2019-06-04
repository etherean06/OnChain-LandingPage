import React from 'react';
import { ReactComponent as Logo } from "./images/Logo.svg";

import background from './images/background.png';
import Form from "./landingpage/LandingPage"
import './App.css';

function App() {
  return (
    <div className="App">

      <Logo className="logo" />
      <Form />
    </div>
  );
}

export default App;
