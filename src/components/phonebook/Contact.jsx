import { nanoid } from 'nanoid';

export default function Contact(
    id = nanoid(),
    name,
    number,
    onRemoveContact,
) {
    return (
        <li key={id}>
            {name}: {number}
            {'   '}
            <button
                type="button"
                onClick={() => onRemoveContact(id)}
            >
                Delete
            </button>
        </li>
    );
}
