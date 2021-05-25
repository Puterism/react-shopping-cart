import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Styled from './Header.styles';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

const Header = (): ReactElement => {
  return (
    <Styled.Root>
      <Styled.Container>
        <Link to="/">
          <Styled.Title>
            <Logo height="45" />
          </Styled.Title>
        </Link>
        <Styled.Nav>
          <Link to="/cart">
            <Styled.NavItem>장바구니</Styled.NavItem>
          </Link>
          <Link to="/order-list">
            <Styled.NavItem>주문목록</Styled.NavItem>
          </Link>
        </Styled.Nav>
      </Styled.Container>
    </Styled.Root>
  );
};

export default Header;
