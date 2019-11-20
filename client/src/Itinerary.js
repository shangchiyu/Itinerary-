import React, { Component } from "react";
import { connect } from "react-redux";
import { getItineraries } from "./store/Actions/itineraryActions";
import { Link } from "react-router-dom";
class Itinerary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     city: this.props.match.params.city
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      city: []
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    console.log("params", params);

    this.props.getItineraries(params);
    // axios
    //   .get(`http://localhost:5000/api/cities/${params.city}`)
    //   .then(response => {
    //     console.log("response", response);
    //     this.setState({ city: response.data });//gonna loop through data
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    const data = this.props.itineraries.itinerary;
    const pic = {
      width: "90%",
      objectFit: "cover"
    };
    return (
      <div>
        {data &&
          data.map((city, index) => {
            return (
              <div>
                <div key={index}>
                  <img src={city.picture} style={pic}></img>
                  <p>{city.city}</p>
                </div>
                <Link to="{/activity/`${city.city}`}">
                  <button>Activity</button>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getItineraries: params => dispatch(getItineraries(params))
  };
};

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return { state, ownProps: ownProps.match.params.city };
// };
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary);
