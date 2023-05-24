import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Phonebook.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        // const name = form.elements.name.value;
        // const number = form.elements.number.value;
        // const id = nanoid();
        const contact = {
            id: nanoid(),
            name: form.elements.name.value,
            number: form.elements.number.value,
        };
        this.props.onSubmit(contact);
        this.formReset();
        form.reset();
    };

    handleChange = evt => {
        this.setState({ name: evt.target.value });
    };

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
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
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button type="submit">
                        Add contact
                    </button>
                </Form>
            </>
        );
    }
}
