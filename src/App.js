import {Home} from './pages/Home/Home.js'
import {AboutUs} from './pages/AboutUs/AboutUs.js'
import {Contacts} from './pages/Contacts/Contacts.js'
import {Objects} from './pages/Objects/Objects.js'
import {Services} from './pages/Services/Services.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Services/>
    </div>
  );
}

export default App;
