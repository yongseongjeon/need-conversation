/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text, backgroundColor, fontColor }) {
  return (
    <>
      <BtnBackground backgroundColor={backgroundColor}>
        <BtnText fontColor={fontColor}>{text}</BtnText>
      </BtnBackground>
    </>
  );
}

const BtnBackground = styled.div`
  width: 345px;
  height: 60px;
  border-radius: 24px;
  background-color: ${(props) => {
    if (props.backgroundColor === 'orange') return '#ca8d4b';
    if (props.backgroundColor === 'white') return '#ffffff';
    if (props.backgroundColor === 'black') return '#424242';
    if (props.backgroundColor === 'red') return '#c47161';
    return '#ffffff';
  }};
  display: flex;
  justify-content: center;
`;

const BtnText = styled.div`
  margin: auto 0;
  color: ${(props) => {
    if (props.fontColor === 'white') return '#ffffff';
    if (props.fontColor === 'orange') return '#ca8d4b';
    if (props.fontColor === 'gray') return '#999999';
    return '#ffffff';
  }}
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default Button;
