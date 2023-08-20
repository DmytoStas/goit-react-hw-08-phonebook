import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookForm from 'components/PhonebookForm';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPhonebook } from 'redux/contacts/operations';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhonebook());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default Phonebook;
