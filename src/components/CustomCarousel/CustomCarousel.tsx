import React from "react";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./styles.scss";

import item1 from "src/assets/pizzas/item1.jpg";
import item2 from "src/assets/pizzas/item2.jpg";
import item3 from "src/assets/pizzas/item3.jpg";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomCarousel: React.FC = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={1080}
      naturalSlideHeight={400}
      visibleSlides={1}
      totalSlides={3}
      hasMasterSpinner
      infinite={true}
      isPlaying={true}
      interval={5000}
      step={1}
      // dragEnabled={true}
      // touchEnabled={true}
    >
      <Slider>
        <Slide index={0}>
          <div
            style={{
              position: "absolute",
              border: "2px solid #a0ce54",
              padding: "3px",
              width: "1000px"
            }}
          >
            <div
              style={{
                backgroundColor: "#a0ce54",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 80px 5px 80px",
                textAlign: "center"
              }}
            >
              <h1
                style={{
                  fontFamily: "Droid Serif",
                  fontSize: "3em",
                  display: "inline-block",
                  marginBottom: "1.5rem",
                  fontStyle: "italic"
                }}
              >
                The secret of quality of life? Quality products!
              </h1>
              <h3
                style={{
                  margin: "0px",
                  paddingBottom: "5px",
                  fontFamily: "Droid Serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic"
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </h3>
            </div>
          </div>
          <Image hasMasterSpinner={true} src={item1} />
        </Slide>
        <Slide index={1}>
          <div
            style={{
              position: "absolute",
              border: "2px solid #a0ce54",
              padding: "3px",
              width: "1000px"
            }}
          >
            <div
              style={{
                backgroundColor: "#a0ce54",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 80px 5px 80px",
                textAlign: "center"
              }}
            >
              <h1
                style={{
                  fontFamily: "Droid Serif",
                  fontSize: "3em",
                  display: "inline-block",
                  marginBottom: "1.5rem",
                  fontStyle: "italic"
                }}
              >
                The secret of quality of life? Quality products!
              </h1>
              <h3
                style={{
                  margin: "0px",
                  paddingBottom: "5px",
                  fontFamily: "Droid Serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic"
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </h3>
            </div>
          </div>
          <Image hasMasterSpinner={true} src={item2} />
        </Slide>
        <Slide index={2}>
          <div
            style={{
              position: "absolute",
              border: "2px solid #a0ce54",
              padding: "3px",
              width: "1000px"
            }}
          >
            <div
              style={{
                backgroundColor: "#a0ce54",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 80px 5px 80px",
                textAlign: "center"
              }}
            >
              <h1
                style={{
                  fontFamily: "Droid Serif",
                  fontSize: "3em",
                  display: "inline-block",
                  marginBottom: "1.5rem",
                  fontStyle: "italic"
                }}
              >
                The secret of quality of life? Quality products!
              </h1>
              <h3
                style={{
                  margin: "0px",
                  paddingBottom: "5px",
                  fontFamily: "Droid Serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic"
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </h3>
            </div>
          </div>
          <Image hasMasterSpinner={true} src={item3} />
        </Slide>
      </Slider>
      <ButtonBack>
        <FontAwesomeIcon
          className="shopping-cart"
          style={{
            fontSize: "2.63em",
            fontStyle: "bold",
            color: "white"
          }}
          icon={faArrowLeft}
        />
      </ButtonBack>
      <ButtonNext>
        <FontAwesomeIcon
          className="shopping-cart"
          style={{
            fontSize: "2.63em",
            fontStyle: "bold",
            color: "white"
          }}
          icon={faArrowRight}
        />
      </ButtonNext>
      <DotGroup />
    </CarouselProvider>
  );
};

export { CustomCarousel };
