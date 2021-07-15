import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import companyLogo from '../../Assets/Images/logo.png';
// icons ######
import Icon from 'react-icons-kit';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import { ic_search } from 'react-icons-kit/md/ic_search'
// react bootstrap ######
import { InputGroup, FormControl, Container } from 'react-bootstrap';
// custom module css ######
import styles from './Header.module.css'


function HeaderComponent() {
  const {
    count
  } = useSelector((state) => ({
    count: state.home.count
  }))

  return (<header className={styles.headerWrap}>
    {/* header top */}
    <section className={styles.headerTopWrap}>
      <Container>
        <section className={styles.headerTopWrapInner}>
          {/* mobile menu */}
          <div className={styles.mobileMenu}>
            icon
          </div>

          {/* logo */}
          <section className={styles.headerTopLeft}>
            <img src={companyLogo} alt="conpany logo" style={{ maxWidth: "22%" }} />
            {/* <h2>SPORTS</h2> */}
          </section>

          {/* *
            header top right
            - my account
            - wishlist
            - checkout
            - login
            - shopping cart
          * */}
          <section className={styles.headerTopRight}>
            <section className={styles.headerTopRightUlWrapper}>
              <ul>
                <li>
                  <Link className={styles.topNavLinkWrap} to="/about">
                    My Account
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/about">
                    My Wishlist
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/about">
                    Checkout
                  </Link>
                </li>

                <li>
                  <Link className={styles.topNavLinkWrap} to="/about">
                    Log in
                  </Link>
                </li>
              </ul>
            </section>

            <Link className={styles.shoppingCartNavLink} to="/about">

              <div className={styles.iconWrap}>
                <Icon icon={ic_shopping_cart} size='25' />
                <div className={styles.shoppingCartCount}>{count}</div>
              </div>

              <div>
                Shopping Cart
              </div>
            </Link>
          </section>
        </section>
      </Container>
    </section>


    {/* header bottom */}
    <section className={styles.headerBottomWrap}>
      <Container>
        {/* header bottom left - menu bar */}
        <section className={styles.headerBottomInnerWrap}>
          <section className={styles.headerBottomLeft}>
            <NavLink
              exact
              to="/"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Home
            </NavLink>

            <NavLink
              exact
              to="/elements"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Elements
            </NavLink>

            <NavLink
              exact
              to="/shop"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Shop
            </NavLink>

            <NavLink
              exact
              to="/blog"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Blogs
            </NavLink>

            <NavLink
              exact
              to="/about"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              About
            </NavLink>

            <NavLink
              exact
              to="/contact"
              className={styles.navLinkWrap}
              activeStyle={{
                backgroundColor: "gold",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Contact
            </NavLink>

          </section>

          {/*   */}
          <section className={styles.headerBottomRight}>
            <InputGroup className="searchForm">
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
          </section>
        </section>
      </Container>
    </section>

  </header>)
}

export const Header = React.memo(HeaderComponent)