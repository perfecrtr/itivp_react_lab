import './style.css';
import {Footer} from '../../components/Footer/Footer.js'
import {Header2} from '../../components/Header/Header2.js'
import { ContactForm } from '../../components/ContactForm/ContactForm.js';

export const Contacts=()=> {
    return (
    <>
      <Header2/>
      <main className='contacts-main'>
        <ContactForm/>
      </main>
      <Footer/>
    </>
    );
}