import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Header({ type, placeholder }) {
  return (
    <>
      <Container>
        <Icon />
        <Input type={type} placeholder={placeholder} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 315px;
  height: 38px;
  border-bottom: solid 1px #c9c9c9;
  display: flex;
  margin-bottom: 27px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #efefef;
  margin-right: 13.3px;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  border: 0;
  padding: 0;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.17px;

  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.17px;
    color: #999999;
  }
`;

Header.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Header;
