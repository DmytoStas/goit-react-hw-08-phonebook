import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <Typography
        fontSize="26px"
        variant="h1"
        fontWeight="700"
        color="#eb44d6"
        marginBottom="10px"
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
