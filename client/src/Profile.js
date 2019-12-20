import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import {logoutUser} from "./store/Actions/userAction"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from './store/Actions/userAction'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          img:'',
          open: false,
          upload:false,
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
         this.logout = this.logout.bind(this);
         this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    this.uploaderVisible=this.uploaderVisible.bind(this);
    this.uploaderClose=this.uploaderClose.bind(this);
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
        console.log(e.target.name)
          this.setState({
              [e.target.name]: e.target.value
          })
      }
      uploaderVisible(){
        this.setState({
         upload:true
      })
      }
      uploaderClose(){
        this.setState({
         upload:false
      })
      }
      async handleSubmit(e) {
        e.preventDefault();
        console.log('e', e)
        const user = {
            // username: this.state.username,
            // email: this.state.email,
            // password: this.state.password,
          img:this.state.img
        }
        await this.props.registerUser(user)
        console.log(user);
        this.props.history.push("/")
    }

    async logout(e) {
        e.preventDefault();
       await this.props.logoutUser(this.props.history);
    //  this.props.history.push('/')
      //  window.location.reload();

    }


    render() {
        console.log(this.props.auth,"get username!!!!!")
        const {username,img} = this.props.auth.user
       
        const { open } = this.state;
        const logLayout = {
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            justifyContent: "center"
          };
          const medLayout = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          };
          const avatar = {
            width: "90px",
            height: "90px"
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
            borderRadius: "4px",
          };
          const buttonLayout = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          };
          const uploadButton={
           fontSize:"10px",
            marginLeft: "3px",
            border: "2px solid grey",
            borderRadius: "2px",
            paddingBottom:"5px"
          }
          const avaLayout = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginLeft: "35%",
           
          };
    
       
          return (
           
                <div>
                    
            <Avatar src={img}  onClick={this.handleClickOpen}/>
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
                  <div style={medLayout}>
                  <div style={avaLayout}><Avatar src={img} style={avatar}/> <strong>Hello!{username}</strong></div>
                  {this.state.upload &&
                  (<div>
                  <input type="text"  placeholder="Enter image link" onChange={this.handleInputChange} name="img" style={inputStyle}/>
                  <Button onClick={this.handleSubmit} color="primary" style={uploadButton}>SUBMIT</Button>
                  <Button onClick={this.uploaderClose} style={uploadButton}>CANCEL</Button>
                  </div>
                  )} 
                  
                   
                    <div>                  
            
       
          </div>
                      {/* <input placeholder="about" style={inputStyle} name="about"
                       /> */}
    
                    </div>
                  </DialogContentText>
    
                  <DialogActions style={buttonLayout}>
                  <Button style={signButton} color="primary" onClick={this.uploaderVisible}>
                      Change Photo
                    </Button>
                    <Button style={signButton} color="primary" onClick={ this.logout}>
                      Sign Out
                    </Button>
      
                  </DialogActions>
                  
                </div>
              </DialogContent>
            </Dialog>
            
                </div>
            )
            
          
                      // }
    }
}
Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch => {

    return {
        logoutUser: () => dispatch(logoutUser ()),
        registerUser: (user) => dispatch(registerUser(user))
    };
  };
  

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));