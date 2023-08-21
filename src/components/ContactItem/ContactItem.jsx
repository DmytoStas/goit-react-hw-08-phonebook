import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Loader from 'components/Loader';
import { deleteContact } from 'redux/contacts/operations';
import { ListItemWrapp } from '../ContactsList/ContactsList.styled';

const ContactItem = ({ contact }) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = async id => {
    setIsLoadingDelete(true);
    await dispatch(deleteContact(`${id}`));
    setIsLoadingDelete(false);
  };
  return (
    <li>
      <ListItemWrapp>
        <p>
          {contact.name}: <span>{contact.number}</span>
        </p>

        <button
          type="button"
          id={contact.id}
          onClick={() => {
            handleDeleteContact(contact.id);
          }}
        >
          Delete {isLoadingDelete && <Loader />}
        </button>
      </ListItemWrapp>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
