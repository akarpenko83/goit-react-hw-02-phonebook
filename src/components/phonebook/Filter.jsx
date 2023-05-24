// import { Component } from 'react';

export default function Filter({ value, onChange }) {
    return (
        <label>
            Find contact by name
            <input
                value={value.name}
                onChange={onChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
    );
}
