import React from 'react';
import Note from './Note';
import Add from './Add';

function Home( {notes, addhandler, deletenote} ) {
    return (
        <div className = 'notes-list'>
            <Add addhandler={addhandler} />
			{notes.map((note) => (
				<Note id={note.id} text={note.text} date={note.date} addhandler={addhandler} deletenote = {deletenote}/>))}
        </div>
    )
}

export default Home
