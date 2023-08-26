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
import { ListItemWrapp } from '../ContactsList/ContactsList.styled';
import ContactModal from 'components/Modal/Modal';
import { cardStyles } from './Style';

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
        <CardContent
          sx={{
            display: 'flex',
            flexFlow: 'column',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <PersonIcon
              size="small"
              sx={{
                color: '#1976d2',
              }}
            />
            <Typography
              component="p"
              sx={{
                width: '142px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {name}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <PhoneIcon
              size="small"
              sx={{
                color: '#1976d2',
              }}
            />
            <Typography
              component="p"
              sx={{
                width: '142px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {number}
            </Typography>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            width: '92px',
            justifyContent: 'center',
          }}
        >
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
                sx={{
                  '&:hover': {
                    color: '#1976d2',
                  },
                }}
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
                sx={{
                  '&:hover': {
                    color: '#1976d2',
                  },
                }}
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
          id={id}
          name={name}
          number={number}
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
