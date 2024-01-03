import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { contactsSelector, filterSelector } from 'store/selectors';

export const ContactList = () => {
  const filterState = useSelector(filterSelector);
  const contactsState = useSelector(contactsSelector);

  const filteredContacts = contactsState.length
    ? contactsState.filter(contact =>
        contact.name.toLowerCase().includes(filterState.toLowerCase())
      )
    : [];

  return (
    <ul>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
          />
        ))
      ) : (
        <p>No contacts saved</p>
      )}
    </ul>
  );
};
