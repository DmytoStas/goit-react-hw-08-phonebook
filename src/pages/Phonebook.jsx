import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookForm from 'components/PhonebookForm';

const Phonebook = () => {
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
