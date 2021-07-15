import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import prodOneImage from '../../Assets/Images/product/prod-1.png';
// icons ######
import Icon from 'react-icons-kit';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'

import styles from './CustomiseKit.module.css';


function CustomiseKitComponent() {

  return (
    <Container>
      <Row noGutters>


        <Col>
          {/* booklane image */}
          <div className={styles.bookLaneImageWrap}>
            <img src={"https://images.unsplash.com/photo-1567943346767-72780dd14cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"} alt="prod 1" className={styles.bookLaneImage} />
          </div>
        </Col>

        <Col>
          <div className={styles.bookLaneWrap}>
            {/* booklane content */}
            <div className={styles.bookLaneContentWrap}>
              <h3>Customise your Kit</h3>

              <p>
                lorem ipsum dolar site amet lorem ipsum dolar site amet lorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site amet
              </p>
   
              <Button variant="primary" size="lg" className={styles.bookLaneButton}>
                Book Now</Button>
            </div>
          </div>
        </Col>



      </Row>

      <Row noGutters>
        <Col>
          <div className={`${styles.bookLaneWrap} ${styles.yellowBg}`}>
            {/* booklane content */}
            <div className={styles.bookLaneContentWrap}>
              <h3>Customise Your Kit</h3>

              <p>
                lorem ipsum dolar site amet lorem ipsum dolar site amet lorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site ametlorem ipsum dolar site amet
              </p>

              <Button variant="primary" size="lg" className={styles.bookLaneButton}>
                Book Now</Button>
            </div>
          </div>
        </Col>

        <Col>
          {/* booklane image */}
          <div className={styles.bookLaneImageWrap}>
            <img src={"https://images.unsplash.com/photo-1567943346767-72780dd14cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"} alt="prod 1" className={styles.bookLaneImage} />
          </div>
        </Col>





      </Row>
    </Container>
  )
}

export const CustomiseKit = React.memo(CustomiseKitComponent);