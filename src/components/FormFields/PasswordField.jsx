import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const PasswordField = props => {
  const { values, touched, errors, handleChange, handleBlur } = props.form;
  return (
    <TextField
      id="password"
      type="password"
      name="password"
      title="Password must be digits and letters"
      label="Password*"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.password ? errors.password : ''}
      error={touched.password && Boolean(errors.password)}
      margin="dense"
      variant="outlined"
      fullWidth
    />
  );
};

PasswordField.propTypes = {
  props: PropTypes.object,
};
