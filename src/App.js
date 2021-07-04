import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import Helmet from 'react-helmet';
import Home from './components/Home';
import About from './components/About';

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
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
          <Switch>
          <Route path = "/Home" component = {Home}/>
          <Route path = "/About" component = {About}/>
          <Home notes = {notes} addhandler = {addnote} deletenote ={deletenote}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
