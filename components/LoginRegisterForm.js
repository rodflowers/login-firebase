import React from "react";

const LoginRegisterForm = (props) => {
  return (
    <div className="col-md-6">
      <div className="formGroup">
        <label>email</label>
        <input
          type="email"
          onChange={(e) => props.setEmail(e.target.value)}
          value={props.email}
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="formGroup">
        <label>password</label>
        <input
          type="password"
          onChange={(e) => props.setPass(e.target.value)}
          value={props.password}
          name="password"
          id="password"
          className="form-control"
        />
      </div>
      <div>
        <button onClick={props.handleSubmit} className="btn btn-primary">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
