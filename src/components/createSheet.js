import React, { useState, useEffect, useContext } from 'react'
import { gapi } from 'gapi-script'
import { SpreadsheetContext } from './SpreadsheetContext';

export default function CreateButton({ name }) {

    const { spreadsheetInfo, setSpreadsheetInfo } = useContext(SpreadsheetContext)

    const CLIENT_ID = "86974978935-nlmnll9afjhk4clf0lke70co74e3f11g.apps.googleusercontent.com";
    const API_KEY = "AIzaSyDqBrj4tYhf1dA8Kb9EaaeZOO3ffgGXXr8";
    const SCOPES = "https://www.googleapis.com/auth/drive";

    useEffect(() => {
        console.log(spreadsheetInfo)    
        function start() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES
        })
        };
    
        gapi.load('client:auth2', start);
    })
    
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
            "title": name
            }
        })
        }).then( (res) => {
        return res.json();
        }).then( function(val) {
        setSpreadsheetInfo({ ...spreadsheetInfo, name: val.properties.title, id: val.spreadsheetId })
        console.log(val);
        console.log(val.spreadsheetId);
        console.log(val.properties.title);
        window.open("https://docs.google.com/spreadsheets/d/" + val.spreadsheetId + "/edit", "_blank");
        });
    }  
    return(
        <button onClick={() => createFile()}>Create spreadsheet</button>
    );
}