import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (this.state.contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  filteredContacts = () =>
    this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  deleteContact = event => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== event.target.id),
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 32,
          }}
        >
          Phonebook
        </h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2
          style={{
            margin: 0,
            fontSize: 24,
          }}
        >
          Contacts
        </h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
