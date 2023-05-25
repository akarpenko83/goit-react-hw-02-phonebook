import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
    ContactListContainer,
    ContactItem,
    DeleteButton,
} from './Phonebook.styled';
export default function ContactList({
    contacts,
    onRemoveContact,
}) {
    return (
        <ContactListContainer>
            {contacts.map(({ name, number, id }) => (
                <ContactItem key={nanoid()}>
                    {name}: {number}
                    <DeleteButton
                        type="button"
                        onClick={() => onRemoveContact(id)}
                    >
                        Delete
                    </DeleteButton>
                </ContactItem>
            ))}
        </ContactListContainer>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};
