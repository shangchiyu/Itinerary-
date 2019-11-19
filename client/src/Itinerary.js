import React, { Component } from "react";
import { connect } from "react-redux";
import { getCity } from "./store/Actions/itineraryActions";
class Itinerary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     city: this.props.match.params.city
  //   };
  // }

  render() {
    return (
      <div>
        <div>..</div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCity: () => dispatch(getCity())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary);
