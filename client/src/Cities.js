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

    return (
      <div>
        {cities &&
          cities.map((city, index) => {
            return <p key={index}>{city.city}</p>;
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
