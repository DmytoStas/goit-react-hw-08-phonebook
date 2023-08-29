import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

import { SpinLoader } from 'components/Loader';
import { deleteContact } from 'redux/contacts/operations';
import { ListItemWrapp } from 'components/ContactsList/ContactsList.styled';
import ContactModal from 'components/Modal/Modal';
import {
  cardActionStyle,
  cardContentStyle,
  cardStyles,
  cardTextStyle,
  contactInfoWrapStyle,
  iconButtonStyle,
} from './contactItemStyles';

const ContactItem = ({ contact }) => {
  const { name, id, number } = contact;
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  const toggleModal = () => setIsModalShow(prev => !prev);

  const dispatch = useDispatch();

  const handleDeleteContact = async id => {
    setIsLoadingDelete(true);
    await dispatch(deleteContact(`${id}`));
    setIsLoadingDelete(false);
  };
  return (
    <ListItemWrapp>
      <Card variant="outlined" sx={cardStyles}>
        <CardContent sx={cardContentStyle}>
          <Box sx={contactInfoWrapStyle}>
            <PersonIcon
              size="small"
              sx={{
                color: '#1976d2',
              }}
            />
            <Typography component="p" sx={cardTextStyle}>
              {name}
            </Typography>
          </Box>

          <Box sx={contactInfoWrapStyle}>
            <PhoneIcon
              size="small"
              sx={{
                color: '#1976d2',
              }}
            />
            <Typography component="p" sx={cardTextStyle}>
              {number}
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={cardActionStyle}>
          {isLoadingDelete ? (
            <SpinLoader />
          ) : (
            <>
              <IconButton
                type="button"
                id={id}
                onClick={() => {
                  toggleModal();
                }}
                size="small"
                sx={iconButtonStyle}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                type="button"
                id={id}
                onClick={() => {
                  handleDeleteContact(id);
                }}
                size="small"
                sx={iconButtonStyle}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
      {isModalShow && (
        <ContactModal
          onClose={toggleModal}
          contact={contact}
          isOpen={isModalShow}
        />
      )}
    </ListItemWrapp>
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
