import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import { AccountCircle } from "@material-ui/icons";

import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // setOpen: false,
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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


    const { open } = this.state;
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
                  <input placeholder="username" style={inputStyle} />
                  <input placeholder="password" style={inputStyle} />
                </div>
              </DialogContentText>

              <DialogActions style={buttonLayout}>
                <Button style={signButton} color="primary">
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
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
