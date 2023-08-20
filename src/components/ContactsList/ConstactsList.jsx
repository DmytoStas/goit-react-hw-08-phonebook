import { useSelector, useDispatch } from 'react-redux';

import Loader from 'components/Loader';

import {
  selectContacts,
  selectFilter,
  selectLoading,
  selectError,
} from 'redux/selectors';

import { ContactsListUl, ListItemWrapp } from './ContactsList.styled';
import { deleteContact } from 'redux/contacts/operations';

function ContactsList() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && !error && <Loader />}
      <ContactsListUl>
        {visibleContacts().map(contact => (
          <li key={contact.id}>
            <ListItemWrapp>
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>

              <button
                type="button"
                id={contact.id}
                onClick={() => {
                  dispatch(deleteContact(`${contact.id}`));
                }}
              >
                Delete
              </button>
            </ListItemWrapp>
          </li>
        ))}
      </ContactsListUl>
    </>
  );
}

export default ContactsList;
