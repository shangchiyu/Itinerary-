import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCities } from "./store/Actions/cityActions";
// import Autocomplete from "./Autocomplete";
class Cities extends Component {
  componentDidMount() {
    const { cities } = this.props.cities;

    if (!cities) this.props.getCities(); //prevent fetch again
  }

  render() {
    console.log(this.props);
    const { cities } = this.props.cities;
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
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      marginLeft: "50px"
    };
    const imgCon = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    };
    const input = {
      marginBottom: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    };

    return (
      <div>
        {/* <input type="text" placeholder="city" style={input} /> */}

        <div>
          {cities &&
            cities.map((city, index) => {
              return (
                <div style={imgCon}>
                  <Link to={`/${city.city}`}>
                    <p key={index} style={title}>
                      {city.city}
                    </p>
                    <img key={index} src={city.img} style={pic} alt="img" />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(getCities())
    // getCity: () => dispatch(getCity())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
