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

import styles from './Features.module.css';


function FeaturesComponent() {

  return (
    <Container>
      <Row noGutters>
        <Col>
          <div className={styles.featureItemWrap}>
            {/* feature title */}
            <div className={styles.featureItemTitle}>
              <h3>Men's</h3>
            </div>

            {/* feature list */}
            <div className={styles.featureItemListWrap}>
              <Link className={styles.featureItemListLink} to="/about">
                Apparel
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                Shoes
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                View All
              </Link>
            </div>

            {/* feature image */}
            <div className={styles.featureItemImageWrap}>
              <img src={prodOneImage} alt="prod 1" className={styles.featureItemImage} />
            </div>

          </div>
        </Col>

        <Col>
          <div className={`${styles.featureItemWrap} ${styles.secondFeature}`}>
            {/* feature title */}
            <div className={styles.featureItemTitle}>
              <h3>Women's</h3>
            </div>

            {/* feature list */}
            <div className={styles.featureItemListWrap}>
              <Link className={styles.featureItemListLink} to="/about">
                Apparel
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                Shoes
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                View All
              </Link>
            </div>

            {/* feature image */}
            <div className={styles.featureItemImageWrap}>
              <img src={prodOneImage} alt="prod 1" className={styles.featureItemImage} />
            </div>

          </div>
        </Col>

        <Col>
          <div className={styles.featureItemWrap}>
            {/* feature title */}
            <div className={styles.featureItemTitle}>
              <h3>Kids</h3>
            </div>

            {/* feature list */}
            <div className={styles.featureItemListWrap}>
              <Link className={styles.featureItemListLink} to="/about">
                Boys
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                Girls
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                View All
              </Link>
            </div>

            {/* feature image */}
            <div className={styles.featureItemImageWrap}>
              <img src={"https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png"} alt="prod 1" className={styles.featureItemImage} />
            </div>

          </div>
        </Col>

        <Col>
          <div className={`${styles.featureItemWrap} ${styles.secondFeature}`}>
            {/* feature title */}
            <div className={styles.featureItemTitle}>
              <h3>Design your own</h3>
            </div>

            {/* feature list */}
            <div className={styles.featureItemListWrap}>
              <Link className={styles.featureItemListLink} to="/about">
                Men's
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                Women's
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                Kids
              </Link>

              <Link className={styles.featureItemListLink} to="/about">
                View All
              </Link>
            </div>

            {/* feature image */}
            <div className={styles.featureItemImageWrap}>
              <img src={prodOneImage} alt="prod 1" className={styles.featureItemImage} />
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export const Features = React.memo(FeaturesComponent);