import React, { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import './App.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsLS = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contactsLS)
    return parsedContacts || []
  })
  const [filter, setFilter] = useState('')
  
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  }

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmitForm = (data) => {
    for (let a of contacts) {
      if (a.name.includes(data.name)) {
        alert(`${data.name} is already in contacts`)
        return;
      }
    }

    setContacts([data, ...contacts])
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

    const normalSize = filter.toLocaleLowerCase()
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalSize)
    )



    return (
          <div className='main'>
            <h1 className='title'>Phonebook</h1>
            <ContactForm addContact={handleSubmitForm} />
            <h2 className='title'>Contacts</h2>
            <Filter value={filter} onChange={onChangeFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
          </div>
        );
}
