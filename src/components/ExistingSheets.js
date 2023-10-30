import React from 'react'
import useDrivePicker from 'react-google-drive-picker'
import { gapi } from 'gapi-script';

function ExistingSheets() {

    const [openPicker] = useDrivePicker()

    const handleOpenPicker = () => {
      openPicker({
        clientId:"86974978935-nlmnll9afjhk4clf0lke70co74e3f11g.apps.googleusercontent.com",
        developerKey:"AIzaSyDqBrj4tYhf1dA8Kb9EaaeZOO3ffgGXXr8",
        viewId:"DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        callbackFunction: (data) => { 
          console.log(data);
        }
      })
    }

    return (
  
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    
  )
}

export default ExistingSheets