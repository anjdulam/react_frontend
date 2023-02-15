// import React, { Fragment } from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.messege);
      if (res.data.messege === "Login successful") {
        navigate("/student_pickproject.html");
      }
    });
  };
  return (
    <>
      {/* {console.log(user)} */}
      <section className="vh-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    {/* <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label> */}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    {/* <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label> */}
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                  {/* <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2" /> Sign in with google
                  </button> */}
                  <Link to="/signup">
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2"
                      style={{ backgroundColor: "#3b5998" }}
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
