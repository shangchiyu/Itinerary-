import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { getCities } from "./store/Actions/cityActions";

class Cities extends Component {
  componentDidMount() {
    // this.props.getCities();
  }
  render() {
    console.log(this.props);
    const { cities } = this.props;
    console.log("cities", cities);
    const pic = {
      width: "70%",
      objectFit: "cover"
    };
    const title = {
      position: "absolute",
      color: "white",
      fontSize: "40px",
      textShadow: "5px 5px 5px grey",
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    };
    const imgCon = {
      display: "flex",
      justifyContent: "center",
      margin: "10px"
    };

    return (
      <div>
        {cities &&
          cities.map((city, index) => {
            return (
              <div style={imgCon}>
                <p key={index} style={title}>
                  {city.city}
                </p>
                <img key={index} src={city.img} style={pic} />
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(Cities); //first is the state, 2 is the dispatch action
