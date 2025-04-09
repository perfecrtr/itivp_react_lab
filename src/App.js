import {Home} from './pages/Home/Home.js'
import {AboutUs} from './pages/AboutUs/AboutUs.js'
import {Contacts} from './pages/Contacts/Contacts.js'
import {Objects} from './pages/Objects/Objects.js'
import {Services} from './pages/Services/Services.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/itivp_react_lab">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/objects" element={<Objects/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
