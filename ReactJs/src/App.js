import React from "react";
import Header from './components/Header/index';

import './styles.css';
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
