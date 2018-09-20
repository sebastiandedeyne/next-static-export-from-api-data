import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  static getInitialProps() {
    return axios.get("http://localhost:3001").then(response => {
      return response.data;
    });
  }

  render() {
    return <h1>{this.props.message}</h1>;
  }
}
