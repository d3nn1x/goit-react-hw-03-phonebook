import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addToContact = data => {
    const { contacts } = this.state;
    const newContact = { ...data, id: uuidv4() };

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  filterContact = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const contacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addToContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} filterContact={this.filterContact} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
