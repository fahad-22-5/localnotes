import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Helmet from 'react-helmet';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

function App() {
  const[ notes, setNotes] = useState([
    
    { 
      id: nanoid(),
      text: 'Localnotes :)',
      date: 'mm/dd/yyyy',
    }

]);

  const addnote = (text) => {
      const date = new Date();
      const NewNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newnotes = [...notes, NewNote];
      setNotes(newnotes);
  }

  const deletenote = (id) => {
    const newnotes = notes.filter((note) => note.id !== id);
    setNotes(newnotes);
  }

  const [searchText, SetsearchText] = useState('');

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  return (
    <div className="App">
      <Router>
          <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
            <Navbar/>
            <Search handlesearch = {SetsearchText}/>
          <Switch>
          <Route path = "/Home" component = {Home}/>
          <Route path = "/About" component = {About}/>
          <Home notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} addhandler = {addnote} deletenote ={deletenote}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
