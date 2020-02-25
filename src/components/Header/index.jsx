import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Header({ text, icon }) {
  return (
    <>
      <Background>
        <Icon icon={icon} />
        <Text>{text}</Text>
        <div />
      </Background>
    </>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 49.2px;
  border-bottom: solid 0.8px #e5e5e5;
  padding: 13px 0 12.2px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: ${(props) => (props.icon ? '24px' : '0')};
  height: 24px;
  background-color: #d8d8d8;
`;

const Text = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.19px;
  color: #191919;
`;

Header.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.bool.isRequired,
};

export default Header;
