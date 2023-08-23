import { TextField } from '@mui/material';

export const EmailField = props => {
  const { values, touched, errors, handleChange, handleBlur } = props.form;
  return (
    <TextField
      id="email"
      type="email"
      name="email"
      title="Must be a regular email"
      label="Email*"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.email ? errors.email : ''}
      error={touched.email && Boolean(errors.email)}
      margin="dense"
      variant="outlined"
      fullWidth
    />
  );
};
