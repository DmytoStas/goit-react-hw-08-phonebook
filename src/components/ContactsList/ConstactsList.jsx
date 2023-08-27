import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

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
    <Box
      sx={{
        height: '400px',
        overflow: 'auto',
      }}
    >
      <ContactsListUl>
        {visibleContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactsListUl>
    </Box>
  );
};

export default ContactsList;
