import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Avatar, Grid } from "@material-ui/core";
import { defualtAvatar } from "./propic.png";

import AddToPhotosRoundedIcon from "@material-ui/icons/AddToPhotosRounded";
export default class signUp extends Component {
  render() {
    const avatar = {
      width: "90px",
      height: "90px"
    };
    const addPic = {
      position: "absolute",
      marginLeft: "30px",
      marginTop: "30px"
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
    return (
      <div style={inputLayout}>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src={defualtAvatar} style={avatar} />
          <AddToPhotosRoundedIcon style={addPic} />
        </Grid>
        <input placeholder="username" style={inputStyle} />
        <input placeholder="password" style={inputStyle} />
        <input placeholder="e-mail" style={inputStyle} />
        <Button style={submit}>SUBMIT</Button>
      </div>
    );
  }
}
