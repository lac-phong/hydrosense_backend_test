import './App.css';
import React,  { useState, useContext } from 'react';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import NameBar from './components/nameBar';
import ExistingSheets from './components/ExistingSheets';
import { SpreadsheetContext } from './components/SpreadsheetContext';

function App() {

  const [userName, setUserName] = useState("");
  const { spreadsheetInfo } = useContext(SpreadsheetContext)
  console.log(spreadsheetInfo);

  return (
    <div className="App">
        <LoginButton setUserName = {setUserName}/>
        <LogoutButton />
        <NameBar />
        <ExistingSheets />
        <p>Name: {spreadsheetInfo.name}</p>
        <p>ID: {spreadsheetInfo.id}</p>
        <p>Hi {userName}</p>
    </div>
  );
}

export default App;