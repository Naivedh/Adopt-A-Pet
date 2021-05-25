import React, { useRef } from "react";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";

import { useHistory } from "react-router";
import { Alert } from "react-bootstrap";

import "../css/login.css";

function SignUp({ signUp, loading, error }) {
  const history = useHistory();

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    await signUp(data);
    if (error != null) history.push("/");
  };

  return (
    <div>
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <div className="container signup__container">
          <div className="container__child signup__form">
            <h2>Sign Up</h2>
            {error && (
              <Alert variant="danger" style={{ fontSize: "14px" }}>
                {error}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="james.bond@spectre.com"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                  ref={passRef}
                  autoComplete="on"
                />
              </div>
              <div className="m-t-lg">
                <ul className="list-inline">
                  <li>
                    <input
                      className="btn btn--form"
                      type="submit"
                      value="Sign Up"
                    />
                  </li>
                  <li className="new__link">
                    <a className="signup__link" href="/signin">
                      Already a member?
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.SignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
