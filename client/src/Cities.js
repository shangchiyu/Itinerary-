import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCities } from "./store/Actions/cityActions";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      cityFiltered: []
    };
    this.onChange.bind(this);
  }
  onChange = e => {
    console.log(e.target.value);
    const { cities } = this.props.cities;

    let cityfilter = cities.filter(city => {
      return city.city
        .toUpperCase()
        .toLowerCase()
        .includes(e.target.value);
    });
    this.setState({ cityFiltered: cityfilter });
    console.log(cityfilter);
  };

  componentDidMount() {
    const { cities } = this.props.cities;
    if (!cities) this.props.getCities(); //prevent fetch again
    this.setState({ cityFiltered: cities }); //by writing cityFiltered = cities, when the text field is emty, it will display all cities
  }

  render() {
    console.log(this.props, "city props!!!");
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
        <input
          type="text"
          placeholder="city"
          list="browsers"
          style={input}
          onChange={this.onChange}
        />
        <datalist id="browsers"></datalist>
        <div>
          {this.state.cityFiltered &&
            this.state.cityFiltered.map((city, index) => {
              return (
                <div>
                  <div key={index} style={imgCon}>
                    <Link to={`/${city.city}`}>
                      <p style={title}>{city.city}</p>
                      <img src={city.img} style={pic} alt="img" />
                    </Link>
                  </div>
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
  };
};

const mapStateToProps = state => {
  console.log(state);

  return { cities: state.cities };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
