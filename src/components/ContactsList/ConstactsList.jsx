import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectContacts, selectFilter, selectError } from 'redux/selectors';
import { ContactsListUl } from './ContactsList.styled';
import { fetchPhonebook } from 'redux/contacts/operations';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';

const ContactsList = () => {
  const [showLoader, setShowLoader] = useState(false);

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPhonebook = async () => {
      setShowLoader(true);
      await dispatch(fetchPhonebook());
      setShowLoader(false);
    };

    getPhonebook();
  }, [dispatch]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {showLoader && !error && <Loader />}
      <ContactsListUl>
        {visibleContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactsListUl>
    </>
  );
};

export default ContactsList;
