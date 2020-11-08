import React from "react";
import Header from './components/Header/index';
import Routes from './routes';

import './styles.css';
import Main from "./pages/main";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
