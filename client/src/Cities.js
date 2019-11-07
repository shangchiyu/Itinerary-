import React, { Component } from "react";
import axios from "axios";

export default class Cities extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/cities/all")
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div>..</div>;
  }
}
