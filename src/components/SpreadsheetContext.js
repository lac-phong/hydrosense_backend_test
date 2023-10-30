import React, { createContext, useState } from 'react';

const SpreadsheetContext = createContext();

const SpreadsheetProvider = ({ children }) => {
  const [spreadsheetInfo, setSpreadsheetInfo] = useState({
    name: '',
    id: ''
  });

  return (
    <SpreadsheetContext.Provider value={{ spreadsheetInfo, setSpreadsheetInfo }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export { SpreadsheetContext, SpreadsheetProvider };