import React from 'react';
import './ContactList.css';

const ContactList = ({contacts, onDelete}) => {
    return <div>
        <ul className='todos'>
            {contacts.map(( {id, name, number} ) => (
                <li className='item' key={number}>
                    <p className='text'>{name}</p>
                    <p className='text'>{number}</p>
                    <button onClick={() => onDelete(id)} className='delete'>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

export default ContactList;

