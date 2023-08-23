import { Box, Typography } from '@mui/material';

import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookForm from 'components/PhonebookForm';

const Phonebook = () => {
  return (
    <Section title={'Phonebook'}>
      <Box display="flex" justifyContent="space-between">
        <PhonebookForm />
        <div>
          <Typography
            fontSize="25px"
            variant="h2"
            color="#000000"
            marginBottom="10px"
            textAlign="center"
          >
            Contacts
          </Typography>
          <Filter />
          <ContactsList />
        </div>
      </Box>
    </Section>
  );
};

export default Phonebook;
