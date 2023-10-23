import './App.css';
import React,  { useEffect } from 'react';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import CreateSheetButton from "./components/createSheet";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <CreateSheetButton />
    </div>
  );
}

export default App;