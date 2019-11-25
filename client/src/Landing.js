import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import browsbutton from "./circled-right-2.png";

import { Link } from "react-router-dom";
import { getCities } from "./store/Actions/cityActions";

import { connect } from "react-redux";

class Landing extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("this.props", this.props);
    console.log("getCities", getCities);
    this.props.getCities();
  }

  render() {
    const brows = {
      width: "40%"
    };

    const intro = {
      fontSize: "25px",
      fontFamily: "Courier New",
      fontStyle: "oblique",
      fontWeight: "bold",
      marginTop: "0px",
      paddingRight: "2px"
    };

    const picture = {
      width: "90%"
    };
    const { cities } = this.props.cities;
    console.log("cities", cities);

    return (
      <div>
        {/* <div> */}
        <p style={intro}>
          "Find your perfect trip. designed by insiders who know and love their
          cities!"
        </p>
        <Link to="/cities">
          <img
            src={browsbutton}
            alt="start"
            className="responsive-img"
            style={brows}
          />
        </Link>
        {/* </div> */}
        <p>Popular MYinteraries</p>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 2,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {" "}
          {cities &&
            cities.map((city, index) => {
              return (
                <div>
                  <Link to={`/${city.city}`}>
                    <img key={index} src={city.img} style={picture}></img>
                  </Link>
                </div>
              );
            })}
        </Carousel>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(getCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing); //first is the state, 2 is the dispatch action
