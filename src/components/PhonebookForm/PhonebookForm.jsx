import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { FormContainer, Label, FormButton } from './PhonebookForm.styled';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';

function PhonebookForm() {
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };
  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name'
      ),
    number: Yup.string()
      .length(9)
      .required('Number required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d/,
        'Invalid number'
      ),
  });

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormContainer>
          <Label htmlFor="name">Name</Label>
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" />
          <Label htmlFor="number">Number</Label>
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" />
          <FormButton type="submit">
            Add contact {isLoader && <Loader />}
          </FormButton>
        </FormContainer>
      </Form>
    </Formik>
  );
}

export default PhonebookForm;
