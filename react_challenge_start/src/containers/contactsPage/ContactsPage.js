import {React, useState, useEffect} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList' 

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;

  const [email, setEmail] = useState('');
  const [guest, setGuest] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateCheck) {
      addContact(guest, phoneNumber, email);

      setGuest('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect( () => {
    for (const contact of contacts) {
      if (guest === contact.guest) {
        setDuplicateCheck(true);
      }
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          guest={guest}
          phoneNumber={phoneNumber}
          email={email}
          setGuest={setGuest}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          data={props.contacts} 
        />
      </section>
    </div>
  );
};
