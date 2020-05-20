import React from 'react';
import styled from 'styled-components';
import magnifierIcon from '../../assets/magnifier.svg';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;
const StyledInput = styled.input`
  padding: 20px 80px 20px 40px;
  font-size: 1.6rem;
  background-color: #ddd;
  border: none;
  border-radius: 50px;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #bbb;
  }
`;

const Input = ({ onChange, value, name }) => (
  <InputWrapper>
    <StyledInput value={value} placeholder={name} onChange={onChange} name={name} id={name} type="text" />
  </InputWrapper>
);

export default Input;
