import React, { Component } from 'react'
import { AccountCircle } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          open: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      
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
      
    render() {
        const { open } = this.state;
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
                <strong>Profile</strong>
                <div style={medLayout}>
                  <input placeholder="username" style={inputStyle}  name="username" 
                    />
                  <input placeholder="about" style={inputStyle} name="about"
                   />
                </div>
              </DialogContentText>

              <DialogActions style={buttonLayout}>
                {/* <Button style={signButton} color="primary" onClick={this.handleSubmit}>
                  Sign In
                </Button> */}
                {/* <Link to="./SignUp" style={drawerButton}>
                  <Button
                    style={signButton}
                    color="primary"
                    onClick={this.handleClose}
                    autoFocus
                  >
                    Sign up
                  </Button>
                </Link> */}
              </DialogActions>
              
            </div>
          </DialogContent>
        </Dialog>
        
            </div>
        )
    }
}
