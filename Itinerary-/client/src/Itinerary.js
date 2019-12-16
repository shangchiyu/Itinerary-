import React, { Component } from "react";
import { connect } from "react-redux";
import { getItineraries,addComment } from "./store/Actions/itineraryActions";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";
import Rating from "react-rating";

class Itinerary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: [],
      weather: "",
      temp:"",
      value: 0,
      commentbody:""
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
   }
  
  handleClick(e) {
    this.setState({value: undefined});
  }
  handleInputChange(e) {
    console.log(e.target.name)
    console.log(this.props)
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  handleClickComment(itinerary){
    console.log('itinerary', itinerary)
    const payload ={
      body:this.state.commentbody,
      username:this.props.auth.user.username,
      img:this.props.auth.user.img,
     itinerary: itinerary
    }
    this.props.addComment(payload)
  }
  
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    console.log("params", params);
    const city = params.city
    this.props.getItineraries(params);
    this.getWeather(city)

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
   getWeather(city){
  //  const res = await fetch("http://api.openweathermap.org/data/2.5/weather?appid=678c06cc43f66b9d6e21b81d6f8d9d8c&cnt=5&lang=en&units=metric&q=Berlin")
  // const data = await res.json()
//  console.log('data', data)
  axios
      .get("http://api.openweathermap.org/data/2.5/weather?appid=678c06cc43f66b9d6e21b81d6f8d9d8c&cnt=5&lang=en&units=metric&q="+city)
      .then(response => {
        console.log("response", response);
      const weather = response.data.weather[0].main
      const temp = response.data.main.temp
      this.setState({weather,temp})
      })
      .catch(function(error) {
        console.log(error);
      });
}

  render() {
    console.log(this.props);
    const data = this.props.itineraries.itinerary;
    // const SVGIcon =this.props
    const pic = {
      width: "90%",
      objectFit: "cover"
    };
    const text={
      textDecorationLine:"none"
    }
const align={
  display:"flex",
  flexDirection:"left",
  justifyContent:"Center",
  fontSize:"20px"
}
const rating={
  paddingRight:"5px"
}
const medLayout = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
const userLayout = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};
// const price={
//   fontSize:"30px"
// }
const commentspace={
  marginLeft:"50px"
}
const inputStyle = {
  border: "2px solid #F5F3F3",
  borderRadius: "4px",
  // marginTop: "20px",
  backgroundColor: "#DCDCDC",
  marginRight: "10%",
  marginLeft: "10%",
  height:"90px",
  width:"250px"
};
const submit = {
  border: "2px solid grey",
  borderRadius: "4px",
  // marginLeft: "35%",
  // marginRight: "35%",
  // marginTop: "10%"
};
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
                <p style={align}> <Rating {...this.props} initialRating={4.5} style={rating}/>Price:{city.price} 
                </p>

{this.state.weather &&this.state.temp&&( <p>Current Weather {"&"} Temperature:{this.state.weather},{this.state.temp}°C</p> )}


                <Link to={`/activity/${city.city}`}>

                  <Button variant="outlined" color="primary" href="#outlined-buttons" style={text}>Things to do</Button>
                 
                </Link>
               <p>
                <input type="text" value={this.state.commentbody} placeholder="leave a comment..." style={inputStyle} name="commentbody"onChange={this.handleInputChange} />
                </p>
                <button onClick={() => this.handleClickComment(city)} style={submit}>SUBMIT</button>
                {city.comment.map((comment)=>{
                  return(
                    <div style={medLayout}>
                    <p style={userLayout}>
                    <div>
                     < Avatar src={comment.img}/>
                     <p>{comment.username}</p>
                     </div>
                     <div style={commentspace}>
                      {comment.body}
                      </div>
                    </p>
                    
                    </div>
                  )
                  

                })}
              </div>
            );
          })}
          
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getItineraries: params => dispatch(getItineraries(params)),
    addComment: comment=>dispatch(addComment(comment))
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
