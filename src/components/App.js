import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';
import PropTypes from 'prop-types';


class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleSubmitForm = (data) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert(`${data.name} is already in contacts`)
        return;
    }
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }))
  }

  componentDidMount() {
    const contactsLS = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contactsLS)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { contacts, filter } = this.state
    const normalSize = this.state.filter.toLocaleLowerCase()
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalSize)
    )
    return (
      <div className={css.main}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={this.handleSubmitForm} />

        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
}; 

export default App;
