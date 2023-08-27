import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const ContactNumberField = props => {
  const { values, touched, errors, handleChange, handleBlur } = props.form;
  return (
    <TextField
      id="number"
      type="tel"
      name="number"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      label="Phone number*"
      value={values.number}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.number ? errors.number : ''}
      error={touched.number && Boolean(errors.number)}
      margin="dense"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

ContactNumberField.propTypes = {
  props: PropTypes.object,
};
