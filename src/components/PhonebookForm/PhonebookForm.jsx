import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { DotsLoader } from 'components/Loader';
import { validationSchema } from 'components/PhonebookForm/validationSchema';
import { ContactNameField, ContactNumberField } from 'components/FormFields';
import {
  phonebookFormContainerStyles,
  submBtnStyle,
} from './phonebookFormStyles';

const PhonebookForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };

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
      toast.error(`${name} is already in contacts.`);
    }
  };

  return (
    <Box sx={phonebookFormContainerStyles}>
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
            sx={submBtnStyle}
          >
            {isLoader ? <DotsLoader /> : <>{<AddIcon />} Add contact</>}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default PhonebookForm;
