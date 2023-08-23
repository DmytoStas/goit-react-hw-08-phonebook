import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import Loader from 'components/Loader/Loader';
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
            <Button type="submit">Add contact {isLoader && <Loader />}</Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
}

export default PhonebookForm;
