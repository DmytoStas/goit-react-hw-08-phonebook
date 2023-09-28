import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError } from 'redux/selectors';
import { useEffect, useState } from 'react';

import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookForm from 'components/PhonebookForm';
import { fetchPhonebook } from 'redux/contacts/operations';
import { SpinLoader } from 'components/Loader';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPhonebook = async () => {
      setShowLoader(true);
      await dispatch(fetchPhonebook());
      setShowLoader(false);
    };

    getPhonebook();
  }, [dispatch]);

  return (
    <Box
      sx={{
        paddingTop: 3.8,
        paddingBottom: 3.8,
      }}
    >
      <Section title={'Phonebook'}>
        <Box display="flex" justifyContent="space-between">
          <PhonebookForm />
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              gap: '10px',
              width: '300px',
            }}
          >
            <Typography
              fontSize="20px"
              variant="h2"
              color="#000000"
              textAlign="center"
            >
              Contacts
            </Typography>
            {contacts.length > 0 ? (
              <>
                <Filter />
                <ContactsList />
              </>
            ) : (
              'No contacts yet ...'
            )}
            {showLoader && !error && <SpinLoader />}
          </Box>
        </Box>
      </Section>
    </Box>
  );
};

export default Phonebook;
