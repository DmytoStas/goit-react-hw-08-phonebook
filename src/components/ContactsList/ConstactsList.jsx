import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactsListUl } from './ContactsList.styled';

import ContactItem from 'components/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <ContactsListUl>
        {visibleContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactsListUl>
    </>
  );
};

export default ContactsList;
