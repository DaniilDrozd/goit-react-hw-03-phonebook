import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from 'app.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
   
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
  
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  
  componentDidUpdate( _,  prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  

  addContact = (contact) => {
    const isSameContact = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isSameContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  getViewContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div className={css.appContainer}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.h2Style}>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.handleFilterChange}
        />
        <ContactList
          contacts={this.getViewContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;