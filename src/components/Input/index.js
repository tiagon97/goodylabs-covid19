import React from 'react';

import { InputWrapper, StyledInput } from './styled';

const Input = ({ onChange, value, name }) => (
  <InputWrapper>
    <StyledInput value={value} placeholder={name} onChange={onChange} name={name} id={name} type="text" />
  </InputWrapper>
);

export default Input;
