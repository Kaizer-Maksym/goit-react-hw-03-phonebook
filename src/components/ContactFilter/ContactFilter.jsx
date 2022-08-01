import React from 'react';
import { FilterText } from './ContactFilter.styled';
import PropTypes from 'prop-types';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <FilterText>Find contacts by name</FilterText>
        <input type="text" onChange={onChange} value={value} />
      </label>
    </>
  );
};

ContactFilter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
