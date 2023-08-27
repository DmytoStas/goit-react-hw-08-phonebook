import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const ContactNameField = props => {
  const { values, touched, errors, handleChange, handleBlur } = props.form;
  return (
    <TextField
      id="name"
      type="text"
      name="name"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      label="Name*"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.name ? errors.name : ''}
      error={touched.name && Boolean(errors.name)}
      margin="dense"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

ContactNameField.propTypes = {
  props: PropTypes.object,
};
