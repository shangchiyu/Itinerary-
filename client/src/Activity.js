import React, { Component } from "react";
import { connect } from "react-redux";

import { getActivity } from "./store/Actions/activityActions";
import Button from "@material-ui/core/Button";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      liked: false,
      mapVisible:false
    };
    this.handleClick = this.handleClick.bind(this);
    // this.removefavourite=this.removefavourite.bind(this);
    this.showMap=this.showMap.bind(this);
    this.closeMap=this.closeMap.bind(this);
  }
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  closeMap() {
    this.setState({
      mapVisible: false
    });
  }
  showMap(){
    this.setState({
      mapVisible:true
  })
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
    console.log(this.props.activities.activity, "activity props");
    const pic = {
      width: "90%",
      objectFit: "cover"
    };
    const button= {
      border: "2px solid grey",
      borderRadius: "4px",
      marginLeft: "35%",
      marginRight: "35%",
     
    };
    
    const label = this.state.liked ? 'Unlike' :'Like'
    return (
      <div>
        {data &&
          data.map((city, index) => {
            console.log(city)
            return (

              <div key={index}>
                <div>
                {/* <p>{city.city}</p> */}
                <img src={city.img} style={pic}></img>
                
                {/* {this.state.like&&<FavoriteBorderIcon/>}
               
               <FavoriteIcon onClick={this.removefavourite}/> */}
          
                  <p><strong>{city.attraction}</strong>:  <a href={city.ticket}>Book now</a>    <Button onClick={this.handleClick} variant="contained" size="medium" color="primary">
          {label}</Button>
        </p>
        {!this.state.mapVisible&&<Button style={button} color="primary" onClick={this.showMap}>VIEW MAP</Button>}
        
       { this.state.mapVisible &&(<div><Button  color="primary" onClick={this.closeMap}>CLOSE MAP</Button><iframe src={city.iframe}></iframe></div>)}
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
