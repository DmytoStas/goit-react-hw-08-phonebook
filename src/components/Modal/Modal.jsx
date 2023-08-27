import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Backdrop, Box, Modal, Fade, Button } from '@mui/material';
import { toast } from 'react-toastify';

import { buttonStyle, buttonWrapStyle, modalStyle } from './modalStyles';
import { validationSchema } from './validationSchema';
import { DotsLoader } from 'components/Loader';
import { ContactNameField, ContactNumberField } from 'components/FormFields';
import { selectContacts } from 'redux/selectors';
import { updateContact } from 'redux/contacts/operations';

const modalRoot = document.querySelector('#modal-root');

const ContactModal = ({ onClose, id, isOpen }) => {
  const [isLoader, setIsLoader] = useState(false);
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { name, number } = values;
    const updatedContact = {
      id,
      name,
      number,
    };

    const findPrevContactInfo = () => {
      const prevContact = contacts.filter(contact => id === contact.id);
      return prevContact[0];
    };

    if (name === '' && number === '') {
      toast.error('All the fields are empty!');
      return;
    }

    if (name === '') {
      updatedContact.name = findPrevContactInfo().name;
    }

    if (number === '') {
      updatedContact.number = findPrevContactInfo().number;
    }

    setIsLoader(true);
    await dispatch(updateContact(updatedContact));
    setIsLoader(false);
    actions.resetForm();
    onClose();
  };

  return createPortal(
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={modalStyle}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form autoComplete="off">
                <Field component={ContactNameField} />

                <Field component={ContactNumberField} />
                <Box sx={buttonWrapStyle}>
                  <Button
                    disabled={isLoader}
                    type="submit"
                    variant="outlined"
                    sx={buttonStyle}
                  >
                    {isLoader ? <DotsLoader /> : 'Save'}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={onClose}
                    sx={buttonStyle}
                  >
                    Close
                  </Button>
                </Box>
              </Form>
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>,
    modalRoot
  );
};

ContactModal.propTypes = {
  contact: PropTypes.shape({
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }),
};

export default ContactModal;
