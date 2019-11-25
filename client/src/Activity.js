import React, { Component } from "react";
import { connect } from "react-redux";
import { getActivity } from "./store/Actions/activityActions";
class Activity extends Component {
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

    this.props.getActivity(params);
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
    const data = this.props.activities.activity;
    console.log(this.props, "activity props");
    return (
      <div>
        {data &&
          data.map((city, index) => {
            return (
              <div>
                <div key={index}>
                  <p>{city.city}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActivity: params => dispatch(getActivity(params))
  };
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
