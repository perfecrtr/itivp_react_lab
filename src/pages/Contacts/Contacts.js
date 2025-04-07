import './style.css';
import {Footer} from '../../components/Footer/Footer.js'
import {Header2} from '../../components/Header/Header2.js'
import { ContactForm } from '../../components/ContactForm/ContactForm.js';

export const Contacts=()=> {
    return (
    <body className="body">
      <Header2/>
      <main>
        <ContactForm/>
      </main>
      <Footer/>
    </body>
    );
}