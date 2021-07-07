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
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './Banner.module.css'


const BannerWrap = styled.section`
    width: 100%;
    max-height: 600px;
    position: relative;
`

const BannerItem = styled.div`
    display: flex;
    width: 100%;

    > div {
        width: 75%;
    }

    > div img {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
    }

    p {
        width: 25%;
        font-size: 1em;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 0;
        background: #adceed;
    }
`

const IndicatorStyledWrap = styled.div`
    cursor: pointer;
    padding: 10px;
    text-align: center;
    border: 1px #666 solid;
    height: 10px;
    width: 10px;
    background-color:red;
    border-radius: 50%;
    /* position: absolute; */
    /* left: 0;
    bottom: 0; */
    /* width: 100%; */
    z-index: 9999;
    background-color: #fff;
    /* border-radius: 50%; */

    ul{
        
    }

    .active {
        color: #fff;
        background: #666;
    }
`

const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: i => (<IndicatorStyledWrap>{i + 1}</IndicatorStyledWrap>)
  }

const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];

function Banner() {

  return (
  <BannerWrap>
    <div>
      <div className="slide-container">
        <Fade {...zoomOutProperties}>
          <BannerItem>
            <div>
                <img src={fadeImages[0]} />
                </div>
                <p>First Slide</p>
          </BannerItem>
            
          
          <BannerItem>
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]} />
            </div>
            </BannerItem>
            <BannerItem>
            <div>
              <img src={fadeImages[2]} />
            </div>
            <p>Third Slide</p>
            </BannerItem>
        </Fade>
      </div>
    </div>

  </BannerWrap>)
}

export { Banner };