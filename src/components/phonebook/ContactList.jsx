// import Contact from './Contact';
import { nanoid } from 'nanoid';

export default function ContactList({
    contacts,
    onRemoveContact,
}) {
    // let id = nanoid();
    return (
        <div>
            <ul>
                {contacts.map(
                    ({ name, number, id = nanoid() }) => (
                        <li key={id}>
                            {name}: {number}
                            {'   '}
                            <button
                                type="button"
                                onClick={() =>
                                    onRemoveContact(id)
                                }
                            >
                                Delete
                            </button>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}
