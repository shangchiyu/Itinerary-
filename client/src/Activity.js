import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getActivity } from "./store/Actions/activityActions";
import Button from "@material-ui/core/Button";
class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
    // this.removefavourite=this.removefavourite.bind(this);
  }
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
//   async handleSubmit(e) {
//     e.preventDefault();
//     console.log('e', e)
//     const user = {
//         username: this.state.username,
//         email: this.state.email,
//         password: this.state.password,
      
//     }
//     await this.props.registerUser(user)
//     console.log(user);
//     this.props.history.push("/")
// }
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
    console.log(this.props.activities.activity, "activity props");
    const pic = {
      width: "90%",
      objectFit: "cover"
    };
    
    const label = this.state.liked ? 'Like' :'Unlike'
    return (
      <div>
        {data &&
          data.map((city, index) => {
            console.log(city)
            return (

              <div key={index}>
                <div>
                <img src={city.img} style={pic}></img>
                <p>{city.city}</p>
                {/* {this.state.like&&<FavoriteBorderIcon/>}
               
               <FavoriteIcon onClick={this.removefavourite}/> */}
                <Button onClick={this.handleClick} variant="contained" size="medium" color="primary">
          {label}</Button>
        
                  <p>{city.attraction}</p>
                  <p><a href={city.ticket}>Book now</a></p>
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
