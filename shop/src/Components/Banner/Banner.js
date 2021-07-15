import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
// icons ######
import Icon from 'react-icons-kit';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'

import sliderOneUrl from '../../Assets/Images/slider-1.jpg';
import sliderTwoUrl from '../../Assets/Images/slider-2.jpg';
import sliderThreeUrl from '../../Assets/Images/slider-3.jpg';
import sliderFourUrl from '../../Assets/Images/slider-4.jpg';
import sliderFiveUrl from '../../Assets/Images/slider-5.jpg';
import styles from './Banner.module.css';

const windowHeight = window.innerHeight;

function BannerComponent() {

  return (
    <Carousel fade={true} interval={null} style={{
      maxHeight:windowHeight - 127,
      overflow:'hidden'
    }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderOneUrl}
          alt="First slide"
        />
        <Carousel.Caption className={styles.bannerTextWrap}>
          <h2>Sportswear for girls</h2>
          <span className={styles.uptoText}>Up to</span>

          <span className={styles.offText}>70% off</span>

          <div className={styles.shopNowButtonWrap}>
            <div><Icon icon={longArrowRight} /></div>
            <Button variant="primary" size="lg" className={styles.shopNowButton}>
              Shop Now</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderTwoUrl}
          alt="Second slide"
        />
        <Carousel.Caption className={styles.bannerTextWrap}>
          <h2>Sportswear for girls</h2>
          <span className={styles.uptoText}>Up to</span>

          <span className={styles.offText}>70% off</span>

          <div className={styles.shopNowButtonWrap}>
            <div><Icon icon={longArrowRight} /></div>
            <Button variant="primary" size="lg" className={styles.shopNowButton}>
              Shop Now</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderThreeUrl}
          alt="Three slide"
        />
        <Carousel.Caption className={styles.bannerTextWrap}>
          <h2>Sportswear for girls</h2>
          <span className={styles.uptoText}>Up to</span>

          <span className={styles.offText}>70% off</span>

          <div className={styles.shopNowButtonWrap}>
            <div><Icon icon={longArrowRight} /></div>
            <Button variant="primary" size="lg" className={styles.shopNowButton}>
              Shop Now</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderFourUrl}
          alt="Four slide"
        />
        <Carousel.Caption className={styles.bannerTextWrap}>
          <h2>Sportswear for girls</h2>
          <span className={styles.uptoText}>Up to</span>

          <span className={styles.offText}>70% off</span>

          <div className={styles.shopNowButtonWrap}>
            <div><Icon icon={longArrowRight} /></div>
            <Button variant="primary" size="lg" className={styles.shopNowButton}>
              Shop Now</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderFiveUrl}
          alt="Five slide"
        />
        <Carousel.Caption className={styles.bannerTextWrap}>
          <h2>Sportswear for girls</h2>
          <span className={styles.uptoText}>Up to</span>

          <span className={styles.offText}>70% off</span>

          <div className={styles.shopNowButtonWrap}>
            <div><Icon icon={longArrowRight} /></div>
            <Button variant="primary" size="lg" className={styles.shopNowButton}>
              Shop Now</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const Banner = React.memo(BannerComponent);