import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const NameField = props => {
  const { values, touched, errors, handleChange, handleBlur } = props.form;
  return (
    <TextField
      id="name"
      type="text"
      name="name"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      label="Username*"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.name ? errors.name : ''}
      error={touched.name && Boolean(errors.name)}
      margin="dense"
      variant="outlined"
      fullWidth
    />
  );
};

NameField.propTypes = {
  props: PropTypes.object,
};
