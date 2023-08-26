import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { DotsLoader } from 'components/Loader';
import { validationSchema } from 'components/PhonebookForm/validationSchema';
import { ContactNameField, ContactNumberField } from 'components/FormFields';

function PhonebookForm() {
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };
  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { name, number } = values;
    const hasContact = contacts.some(contact => {
      const normalizedName = contact.name.toLowerCase();
      return normalizedName === name.toLowerCase();
    });

    if (!hasContact) {
      const newContact = {
        name,
        number,
      };

      setIsLoader(true);
      await dispatch(addContact(newContact));
      setIsLoader(false);
      actions.resetForm();
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <Field component={ContactNameField} />

            <Field component={ContactNumberField} />
            <Button
              disabled={isLoader}
              type="submit"
              variant="outlined"
              sx={{
                fontSize: '14px',
                width: '200px',
                height: '30px',
                marginTop: 1,
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#1976d2',
                },
              }}
            >
              {isLoader ? <DotsLoader /> : <>{<AddIcon />} Add contact</>}
            </Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
}

export default PhonebookForm;
