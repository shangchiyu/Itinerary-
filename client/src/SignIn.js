import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './store/Actions/userAction';
import Button from "@material-ui/core/Button";
import { AccountCircle } from "@material-ui/icons";
import { withRouter } from 'react-router-dom';
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Profile from"./Profile"

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // setOpen: false,
      open: false,
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
      password: '',
      }
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({
      open: false
    });
  }
  handleClickOpen() {
    this.setState({
      open: true
    });
  }
  handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

async handleSubmit(e) {
    e.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password,
    }
    await this.props.loginUser(user);
    
 }


// componentWillReceiveProps(nextProps) {
//   if(nextProps.auth.isAuthenticated) {
//     // this.props.history.push('/')
//   }
//   if(nextProps.errors) {
//       this.setState({
//           errors: nextProps.errors
//       });
//   }
// }

  render() {
    
    const logLayout = {
      display: "flex",
      marginTop: "100px",
      flexDirection: "column",
      justifyContent: "center"
    };
    const medLayout = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    };
    const inputStyle = {
      border: "2px solid #F5F3F3",
      borderRadius: "4px",
      marginTop: "20px",
      backgroundColor: "#DCDCDC",
      height: "30px"
    };
    const signButton = {
      border: "2px solid grey",
      borderRadius: "4px"
    };
    const buttonLayout = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    };
    const drawerButton = {
      textDecorationLine: "none"
    };
// const googleButton={
//   border: "2px solid grey",
//   borderRadius: "4px",
//   color:"white",
//   backgroundColor:"purple"
// }
  
    const { open } = this.state;
  console.log(this.props.auth.user)
  if(this.props.auth.user){
    return (
      <div>
        <Profile />
      </div>
    )
  }else {
    return (
      <div>
        <Fab variant="outlined" color="primary" onClick={this.handleClickOpen}>
          <AccountCircle />
        </Fab>

        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <Button autoFocus onClick={this.handleClose} color="primary">
              {"< Back"}
            </Button>
            <div style={logLayout}>
              <DialogContentText>
                <strong>Sign In:</strong>
                <div style={medLayout}>
                  <input placeholder="e-mail" style={inputStyle}  name="email" onChange={ this.handleInputChange }
                    value={ this.state.email }/>
                  <input placeholder="password" style={inputStyle} name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }/>
                </div>
              </DialogContentText>

              <DialogActions style={buttonLayout}>
                <Button style={signButton} color="primary" onClick={this.handleSubmit}>
                  Sign In
                </Button>
                <Link to="./SignUp" style={drawerButton}>
                  <Button
                    style={signButton}
                    color="primary"
                    onClick={this.handleClose}
                    autoFocus
                  >
                    Sign up
                  </Button>
                </Link>
              </DialogActions>
              {/* <Button style={googleButton}>
                  Login with Google
                </Button> */}
            </div>
          </DialogContent>
        </Dialog>
        
      </div>
    );
  }
   
  }
}
SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch => {

  return {
    loginUser: (user) => dispatch(loginUser (user))
  };
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export  default connect(mapStateToProps,mapDispatchToProps )(withRouter(SignIn))