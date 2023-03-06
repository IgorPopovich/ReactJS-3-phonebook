import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';


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
    <div className={css.contactForm}>
      <form onSubmit={this.handleSubmit} className={css.form} action="">
        <label className={css.label}>
          Name
          <input
            onChange={ this.handleChange }
            value={this.state.name}
            className={css.value}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            onChange={ this.handleChange }
            value={this.state.number}
            className={css.value}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type='submit' className={css.btnAdd}>Add contact</button>
      </form>
    </div>
  );
  }
};

ContactForm.propTypes = {
  nume: PropTypes.string,
  number: PropTypes.string,
}; 

export default ContactForm;
