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
                {contacts.map(({ name, number, id }) => (
                    <li key={nanoid()}>
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
                ))}
            </ul>
        </div>
    );
}
