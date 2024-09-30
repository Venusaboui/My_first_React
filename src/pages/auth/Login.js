import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Capture.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await fetch("https://readindata-zxon.vercel.app//credentials");

        if (!response.ok) {
          throw new Error("Failed to fetch credentials");
        }
        const fetchedCredentials = await response.json();
        setCredentials(fetchedCredentials);
      } catch (error) {
        console.log("a problem occured", error);
      }
    };

    fetchCredentials();
  }, []);

  const handleLogin = (e) => {
    console.log(credentials);

    console.log(password, username);

    e.preventDefault();
    const userFound = credentials.find(
      (credential) =>
        credential.Username === username && credential.Password === password
    );

    console.log(userFound);

    if (userFound) {
      setMessage("Login successful!");
      navigate("/home");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="logincontainer">
      {/* LEFT SIDE */}
      <div className="loginimage">
        <div className="loginlogo">
          <img
            src={logo}
            alt=""
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="Welcome" style={{ fontSize: "5rem" }}>
          Welcome!
        </div>
      </div>
      {/* Right SIDE */}
      <div className="loginputs">
        <div className="linputscontainer">
          <br />
          <br />
          <br />
          <h1 className="fw-bold" style={{ fontSize: "5rem" }}>
            Login
          </h1>
          <br />
          <p className="fw-bold">Welcome Please Login your account</p>

          <form onSubmit={handleLogin}>
            {/* USERNAME */}
            <div className="linput username mb-4">
              <label htmlFor="formGroupExampleInput" className="form-label">
                {" "}
                <FaUserGraduate /> Username{" "}
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Joyce"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="linput mb-4">
              <label htmlFor="formGroupExampleInput" className="form-label">
                {" "}
                <RiLockPasswordLine /> Password{" "}
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />
            <div className="submitbutton">
              <button type="login" className="submitlogin">
                <span className="fw-bold fs-4">LOGIN</span>
              </button>
            </div>

            <br />
            <div className="forgotpassword">Forgot Password ?</div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
