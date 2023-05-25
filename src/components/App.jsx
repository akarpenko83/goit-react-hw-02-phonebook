import React, { Component } from 'react';
import { Container } from './phonebook/Phonebook.styled';
import INITIAL_CONTACTS from './phonebook/initContacts.json';
import ContactForm from './phonebook/ContactForm';
import ContactList from './phonebook/ContactList';
import Filter from './phonebook/Filter';
import { SectionName } from './phonebook/Phonebook.styled';
import background from './utils/background';
class App extends Component {
    state = {
        contacts: INITIAL_CONTACTS,
        filter: '',
    };

    onSubmit = contact => {
        if (
            this.state.contacts.find(
                arr => arr.name === contact.name,
            )
        ) {
            alert(
                `${contact.name} is already in the contact list`,
            );
            return;
        }
        this.setState(prevState => ({
            contacts: [...this.state.contacts, contact],
        }));
    };

    handleRemoveContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    handleChangeFilter = evt => {
        this.setState({ filter: evt.target.value });
    };

    getFilteredContacts = () => {
        const normalizedFilter =
            this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(normalizedFilter),
        );
    };

    render() {
        window.onload = background;
        return (
            <Container>
                <SectionName>Phonebook</SectionName>
                <ContactForm onSubmit={this.onSubmit} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onChange={this.handleChangeFilter}
                />
                <ContactList
                    contacts={this.getFilteredContacts()}
                    onRemoveContact={
                        this.handleRemoveContact
                    }
                />
            </Container>
        );
    }
}
export default App;
