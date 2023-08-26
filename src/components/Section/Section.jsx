import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section style={{ height: '100vh' }}>
      <Typography
        fontSize="30px"
        variant="h1"
        fontWeight="700"
        color="#1976d2"
        marginBottom="30px"
        textAlign="center"
      >
        {title}
      </Typography>
      <>{children}</>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
