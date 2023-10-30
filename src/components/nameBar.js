import React, { useContext, useState } from 'react';
import CreateButton from './createSheet';

export default function NameBar() {

    const [nameInput, setNameInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setNameInput(e.target.value);
    };

    return (
        <div>
            <input
                type="search"
                placeholder="Name spreadsheet"
                onChange={handleChange}
                value={nameInput}
            />
            <CreateButton name={nameInput}/>
        </div>
    )

}