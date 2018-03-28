import React from 'react';
import styled from 'styled-components';
import AbstractButton from './AbstractButton';

const Wrapper = styled(AbstractButton)`
  height: 48px;
  border-radius: 24px;
  display: flex;
  item-align: center;
  justify-content: center;
  background: white;
`;

const Label = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

const PrimaryButton = (props) => (
  <Wrapper
    className={props.className}
    onClick={props.onClick}
  >
    <Label>{props.label}</Label>
  </Wrapper>
);
PrimaryButton.defaultProps = {
  className: '',
  label: 'Button',
};

export default PrimaryButton;
