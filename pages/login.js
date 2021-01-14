import React, { Component } from "react";
import firabase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Clicked");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center pt-4">Login Page</h2>
          <div className="col-md-6">
            <div className="formGroup">
              <label>email</label>
              <input
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                id="email"
                className="form-control"
              />
              <small>{this.state.email}</small>
            </div>
            <div className="formGroup">
              <label>password</label>
              <input
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
                id="password"
                className="form-control"
              />
              <small>{this.state.password}</small>
            </div>
            <div>
              <button className="btn btn-primary" style={{ margin: 5 }}>
                Regitrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
