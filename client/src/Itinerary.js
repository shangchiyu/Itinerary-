import React, { Component } from "react";
import { connect } from "react-redux";
import { getItineraries } from "./store/Actions/itineraryActions";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
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
    console.log(this.props);
    const data = this.props.itineraries.itinerary;
    const pic = {
      width: "90%",
      objectFit: "cover"
    };
    const text={
      textDecorationLine:"none"
    }

    return (
      <div>
        {data &&
          data.map((city, index) => {
            return (
              <div>
             <div key={index}>
                  <img src={city.picture} style={pic}></img>
                  {/* <p>{city.city}</p> */}
                </div>
                <ReactWeather
  forecast="today"
  apikey="678c06cc43f66b9d6e21b81d6f8d9d8c"
  type="city"
  city={city.city}
/>
<p>Price:{city.price}</p>
                <Link to={`/activity/${city.city}`}>

                  <Button variant="outlined" color="primary" href="#outlined-buttons" style={text}>Things to do</Button>
                 
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
