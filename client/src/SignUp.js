import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Avatar, Grid } from "@material-ui/core";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from './store/Actions/userAction'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        email: '',
        password: '',
        img:'',
         upload:false,
        errors: {
          username: '',
          email: '',
        password: '',
        img:''
        }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploaderVisible=this.uploaderVisible.bind(this);
}
uploaderVisible(){
  this.setState({
   upload:true
})
}

uploadSubmit(){
  
  this.setState({
    upload:false,
   
 })
}
handleInputChange(e) {
  console.log(e.target.name)
    this.setState({
        [e.target.name]: e.target.value
    })
}


async handleSubmit(e) {
    e.preventDefault();
    console.log('e', e)
    const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      img:this.state.img
    }
    await this.props.registerUser(user)
    console.log(user);
    this.props.history.push("/")
}

// componentWillReceiveProps(nextProps) {
//   if(nextProps.auth.isAuthenticated) {
//       this.props.history.push('/')
//   }
//   if(nextProps.errors) {
//       this.setState({
//           errors: nextProps.errors
//       });
//   }
// }
componentDidMount() {
  if(window.localStorage.getItem('jwtToken')) {
    this.props.history.push("/")
 
}
}
  render() {
    const avatar = {
      width: "90px",
      height: "90px"
    };

    const inputStyle = {
      border: "2px solid #F5F3F3",
      borderRadius: "4px",
      marginTop: "20px",
      backgroundColor: "#DCDCDC",
      marginRight: "10%",
      marginLeft: "10%"
    };
    const inputLayout = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    };
    const submit = {
      border: "2px solid grey",
      borderRadius: "4px",
      marginLeft: "35%",
      marginRight: "35%",
      marginTop: "10%"
    };
    const uploadButton={
      border: "2px solid grey",
      borderRadius: "4px",
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5%",
      fontSize:"9px"
    }
    const file={
      marginLeft: "20%",
     
    }

    return (
      <div style={inputLayout}>
        <form>
          <Grid container justify="center" alignItems="center">
            {/* <Avatar alt="Remy Sharp"  style={avatar} /> */}
            {/* {this.state.upload&& ( */}
            {/* )} */}
            {!this.state.img? <AccountCircleIcon style={avatar} onClick={this.uploaderVisible}/>
:
      <Avatar alt="Remy Sharp" src={this.state.img}  style={avatar}/>}
          </Grid>
          {this.state.upload &&(<div>
          <input type="file" style={file} value={this.state.img} />
          <Button variant="raised" component="span" style={uploadButton} name="uploaded image" onClick={this.uploadSubmit}> 
          Upload profile picture
        </Button>
        </div>
        )
          }
          <input placeholder="username" style={inputStyle} name="username" onChange={ this.handleInputChange}
                    value={this.state.username} />
                     {this.state.errors.username && (<div>{this.state.errors.username}</div>)}
          <input placeholder="password" style={inputStyle} type="password" name="password" onChange={ this.handleInputChange }
                    value={ this.state.password }/>
                    {this.state.errors.password && (<div>{this.state.errors.password}</div>)}
          <input placeholder="e-mail" style={inputStyle} onChange={ this.handleInputChange }
                    value={ this.state.email } name="email"/>
                    {this.state.errors.email && (<div>{this.state.errors.email}</div>)}
       <input type="text"  placeholder="profile image link" onChange={this.handleInputChange} name="img" style={inputStyle}/>
      
       
        <Button onClick={this.handleSubmit} style={submit}>SUBMIT</Button>
        </form>
        
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {

  return {
    registerUser: (user) => dispatch(registerUser(user))
  };
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors

});
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignUp))
// export default {
//   component: withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUp)),
  
// }
