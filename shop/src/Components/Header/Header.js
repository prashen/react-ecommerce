import React, { useState, useEffect } from 'react';
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
import companyLogo from '../../Assets/Images/logo.png';
import Icon from 'react-icons-kit';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import { ic_search } from 'react-icons-kit/md/ic_search'
import { InputGroup, FormControl } from 'react-bootstrap';

const HeaderWrap = styled.header`
  background-color:#fff;
  // padding:0 1%;
`;

/**
 * header top
 */
const HeaderTopWrap = styled.section`
background-color: #fbf9fa;
border:1px solid #f1f1f1;
  /* display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start; */

  @media (max-width: 768px) {
    // flex:0;
    border:1px solid #000;
    justify-content:space-between;
  }
  
`;

const HeaderTopWrapInner = styled.section`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  /* padding:10px; */
  padding:5px 0;
`

const HeaderTopLeft = styled.section`
  // border:1px solid #000;
  flex:1;
  /* margin-top:10px;
  margin-bottom:10px; */
  margin-left:10px;
  
  h2 {
    font-weight:bold;
    font-family:Impact;
    font-size:4rem;
    color:#0f0f0f;
    margin:0
  }

  @media (max-width: 768px) {
    flex:0;
    // justify-content:center;
    // flex-direction: column;
  }
`
const HeaderTopRight = styled.section`
  // border:1px solid #000;
  display:flex;
  flex:1;
  flex-direction:row;
  justify-content:flex-end;
  text-align:right;
  font-family: 'Oswald', sans-serif;;

  @media (max-width: 768px) {
    flex:0;
  }
`;

const HeaderTopRightUlWrapper = styled.section`
  
  
  & ul > li {
    float:left;
  }

  @media (max-width: 768px) {
    display:none;
  }
`





const TopNavLinkStyledWrap = styled(Link)`
  padding:10px;
  display: inline-block;
  text-transform:uppercase;
  font-size:14px;
  color:#0f0f0f;
  text-decoration:none;
  
  // &&&:hover{
  //   text-decoration:none;
  // }
`

const ShoppingCartNavLinkStyledWrap = styled(Link)`
  display:flex;
  position: relative;
  padding:10px;
  // display: inline-block;
  text-transform:uppercase;
  font-size:14px;
  color:#0f0f0f;
  text-decoration:none;
  
  
  // &&&:hover{
  //   text-decoration:none;
  // }

  @media (max-width: 768px) {
    display:flex;
  }
  
`

const StyledIconWrap = styled.div`
  /* border:1px solid #000; */
  
  /* margin-left:10px; */
  position: relative;

  i {
    padding-right: 10px;
    border-width:0;
    border-left-width:1px;
    border-style:solid;
    border-color:#d8d8d8;
    padding-left:10px;
  }
`

const ShoppingCartCount = styled.div`
  display: block;
  width:20px;
  height: 20px;
  background-color: #ffc000;
  border-radius: 50%;
  position: absolute;
  top: -11px;
  left: 22px;
  text-align:center;
  color: #fff;
`
// const StyledIcon = styled(Icon)`

// `




/**
 * header bottom
 */
const HeaderBottomWrap = styled.section`
  border-color:#f0f1f1;
  border-style:solid;
  border-top-width:0;
  border-left-width:0;
  border-right-width:0;
  border-bottom-width:1px;
  // padding:10px;
`

const HeaderBottomInnerWrap = styled.section`
  display:flex;
  flex-direction:row;
  /* justify-content:flex-start; */
`

const HeaderBottomLeft = styled.section`
  // border:1px solid #000;
  display:flex;
  flex:1;
`

const HeaderBottomRight = styled.section`
  // border:1px solid #000;
  display:flex;
  flex:1;
  justify-content:flex-end;
  align-items: flex-end;
  text-align:right;
  margin-top:10px;
  
  /* width:100%; */
  
  .searchForm {
    width:50%;
    height: 30px;
  }
  .searchIcon {
    background-color: gold;
  }

`;

const NavLinkStyledWrap = styled(NavLink)`
  padding:15px 20px;
  display: inline-block;
  text-transform:uppercase;
  font-size:13px;
  color:#0f0f0f;
  text-decoration:none;
  // border:1px #d8d8d8 solid;
  border-width:0;
  

  &&&:hover{
    background-color:#0f0f0f;
    color:white;
    text-decoration:none;
  }
`

const MobileMenu = styled.div`
  display:none;

  @media (max-width: 768px) {
    display:inline-block;
  }
`

function Header() {
  const {
    count
  } = useSelector((state) => ({
    count: state.home.count
  }))

  useEffect(() => {
    // WebFont.load({
    //   google: {
    //     families: ['Droid Sans', 'Chilanka']
    //   }
    // });
  }, []);

  return (<HeaderWrap>
    {/* header top */}

    <HeaderTopWrap>
      <KitContainer>
        <HeaderTopWrapInner>
          <MobileMenu>
            icon
          </MobileMenu>

          <HeaderTopLeft>
            <img src={companyLogo} alt="conpany logo" style={{ maxWidth: "22%" }} />
            {/* <h2>SPORTS</h2> */}
          </HeaderTopLeft>

          <HeaderTopRight>
            <HeaderTopRightUlWrapper>
              <ul>
                <li>
                  <TopNavLinkStyledWrap to="/about">
                    My Account
                  </TopNavLinkStyledWrap>
                </li>

                <li>
                  <TopNavLinkStyledWrap to="/about">
                    My Wishlist
                  </TopNavLinkStyledWrap>
                </li>

                <li>
                  <TopNavLinkStyledWrap to="/about">
                    Checkout
                  </TopNavLinkStyledWrap>
                </li>

                <li>
                  <TopNavLinkStyledWrap to="/about">
                    Log in
                  </TopNavLinkStyledWrap>
                </li>
              </ul>
            </HeaderTopRightUlWrapper>

            <ShoppingCartNavLinkStyledWrap to="/about">

              <StyledIconWrap>
                <Icon icon={ic_shopping_cart} size='25' />
                <ShoppingCartCount>{count}</ShoppingCartCount>
              </StyledIconWrap>

              <div>
                Shopping Cart
              </div>
            </ShoppingCartNavLinkStyledWrap>
          </HeaderTopRight>
        </HeaderTopWrapInner>
      </KitContainer>
    </HeaderTopWrap>


    {/* header bottom */}

    <HeaderBottomWrap>
      <KitContainer>
        <HeaderBottomInnerWrap>
          <HeaderBottomLeft>
            <NavLinkStyledWrap
              exact
              to="/"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Home
            </NavLinkStyledWrap>

            <NavLinkStyledWrap
              exact
              to="/elements"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Elements
            </NavLinkStyledWrap>

            <NavLinkStyledWrap
              exact
              to="/shop"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Shop
            </NavLinkStyledWrap>

            <NavLinkStyledWrap
              exact
              to="/blog"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Blogs
            </NavLinkStyledWrap>

            <NavLinkStyledWrap
              exact
              to="/about"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              About
            </NavLinkStyledWrap>

            <NavLinkStyledWrap
              exact
              to="/contact"
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Contact
            </NavLinkStyledWrap>

          </HeaderBottomLeft>

          <HeaderBottomRight>
            <InputGroup className="mb-3 searchForm">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="searchForm"
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" className="searchIcon"><Icon icon={ic_search} /></InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </HeaderBottomRight>
        </HeaderBottomInnerWrap>
      </KitContainer>
    </HeaderBottomWrap>

  </HeaderWrap>)
}

export { Header };