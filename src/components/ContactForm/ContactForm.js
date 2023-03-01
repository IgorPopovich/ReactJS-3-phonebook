import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import './ContactForm.css';


class ContactForm extends Component {

  state = {
    name: '',
    number: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.name === '' || this.state.number === '') {
      return
    }
    const { name, number } = this.state;
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    }

    this.props.addContact(newContact)

    this.setState({
        name: '',
        number: ''
      })
  }

  render() {
    return (
    <div className='contactForm'>
      <form onSubmit={this.handleSubmit} className='form' action="">
        <label>
          Name
          <input
            onChange={ this.handleChange }
            value={this.state.name}
            className='value'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={ this.handleChange }
            value={this.state.number}
            className='value'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type='submit' className='btnAdd'>Add contact</button>
      </form>
    </div>
  );
  }
};

export default ContactForm;
