import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

return (
    <ul className={css.container}>
        {filteredContacts.length === 0 && <li>No contacts found.</li>}
        {filteredContacts.map(contact => (
            <li key={contact.id}>
                <Contact data={contact} />
            </li>
        ))}
    </ul>
);
}