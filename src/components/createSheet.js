import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = "86974978935-nlmnll9afjhk4clf0lke70co74e3f11g.apps.googleusercontent.com";
const API_KEY = "AIzaSyDi8Kg20kBL_6Zi6xF2W8XCWfw6kln8kHs";
const SCOPES = "https://www.googleapis.com/auth/drive";

const CreateButton = () => {
    useEffect(() => {
        function start() {
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES
          })
        };
    
        gapi.load('client:auth2', start);
      })
    
      function zerofill(i) {
        return (i < 10 ? '0' : '') + i;
      }
    
      function getDateString() {
        const date = new Date();
        const year = date.getFullYear();
        const month = zerofill(date.getMonth()+1);
        const day = zerofill(date.getDate());
        return year + '-' + month + '-'  + day;
      }
    
      function getTimeString() {
        const date = new Date();
        return date.toLocaleTimeString();
      }
    
      function createFile() {
        var accessToken = gapi.auth.getToken().access_token;
        fetch('https://sheets.googleapis.com/v4/spreadsheets', {
          method: "POST",
          headers: new Headers({
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            "properties": {
              "title": "TEST: " + getDateString() + " " + getTimeString()
            }
          })
        }).then( (res) => {
          return res.json();
        }).then( function(val) {
          console.log(val);
          console.log(val.spreadsheetId);
          window.open("https://docs.google.com/spreadsheets/d/" + val.spreadsheetId + "/edit", "_blank");
        });
    }  
    return(
        <button onClick={() => createFile()}>Create spreadsheet</button>
    );
}

export default CreateButton;