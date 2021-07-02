import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import styled from 'styled-components';
import { KitContainer } from '../../Kit'

// import Button from 'react-bootstrap/Button';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const HeaderWrap = styled.header`
  background-color:#d8d8d8;
`;

const HeaderTopWrap = styled.section`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  // padding:10px;
`;

const HeaderTopLeft = styled.section`
  // border:1px solid #000;
  flex:1
`
const HeaderTopRight = styled.section`
  // border:1px solid #000;
  flex:1;
  justify-content:flex-start;
  text-align:right;
`;

const HeaderBottomWrap = styled.section`
  display:flex;
  flex-direction:row;
  
  justify-content:flex-start;
  // border-width:1px;
  border-color:black;
  border-style:solid;
  border-top-width:1px;
  border-left-width:0;
  border-right-width:0;
  border-bottom-width:1px;
  // padding:10px;
`

const HeaderBottomLeft = styled.section`
  // border:1px solid #000;
  flex:1;
`

const HeaderBottomRight = styled.section`
  // border:1px solid #000;
  flex:1;
  justify-content:flex-start;
  text-align:right;
`;

const NavLinkStyledWrap = styled(NavLink)`
  padding:10px;
  display: inline-block;
`

function Header() {
  const {
    count
  } = useSelector((state) => ({
    count: state.home.count
  }))

  return (<HeaderWrap>
    {/* header top */}
    <KitContainer>
      <HeaderTopWrap>
        <HeaderTopLeft>
          <h1>Logo</h1>
        </HeaderTopLeft>

        <HeaderTopRight>
          top right
        </HeaderTopRight>
      </HeaderTopWrap>
    </KitContainer>

    {/* header bottom */}
    <HeaderBottomWrap>
      <HeaderBottomLeft>
        <NavLinkStyledWrap
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: 'red'
          }}
        >
          Home
        </NavLinkStyledWrap>

        <NavLinkStyledWrap
          exact
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: 'red'
          }}
        >
          About
        </NavLinkStyledWrap>
      </HeaderBottomLeft>

      <HeaderBottomRight>
        bottom right
      </HeaderBottomRight>
    </HeaderBottomWrap>


  </HeaderWrap>)
}

export { Header };