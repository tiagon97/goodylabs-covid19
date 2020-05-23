import React from 'react';
import PropTypes from 'prop-types';

import StyledHeading from './styled';

const Heading = ({ children, main }) => <StyledHeading main={main}>{children}</StyledHeading>;

export default Heading;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  main: PropTypes.string,
};

Heading.defaultProps = {
  main: '',
};
