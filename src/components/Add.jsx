import React from 'react';
import { useState } from 'react';

function Add({ addhandler }) {

    const [noteText, SetnoteText] = useState('');
    const characterLimit = 200;

    const changehandler = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
			SetnoteText(e.target.value);
		}
    }

    const saveclick = () => {
        if (noteText.trim().length > 0) {
			addhandler(noteText);
			SetnoteText('');
		}
    }
    return (
        <div className = 'note new'>
            <textarea id="" cols="10" rows="8" onChange = {changehandler} value ={noteText} />
            <div className="footer">
                <small>{characterLimit - noteText.length} characters remaining</small>
                <button className="save" onClick = {saveclick}>Save</button>
            </div>
        </div>
    )
}

export default Add
