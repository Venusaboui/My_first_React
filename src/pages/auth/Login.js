import React from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Capture.png";

const  Login = () => {
     const navigate = useNavigate();
 function handleSubmit() {
   navigate("/admin")
    }

    return ( 
    <div className="logincontainer">
      {/* LEFT SIDE */}
      <div className="loginimage">
        <div className='loginlogo'><img src={logo} alt="" style={{ width: 'auto',maxWidth:'100%', height: 'auto', borderRadius: '10px' }}/></div>
        <div className="Welcome" style={{fontSize:"5rem"}}>Welcome!</div>
      </div>
      {/* Right SIDE */}
      <div className="loginputs">
        <div className="linputscontainer">
            <br /><br /><br />
          <h1 className='fw-bold'  style={{fontSize:"5rem"}}>Login</h1>
          <br />
          <p className='fw-bold'>Welcome Please Login your account</p>
          
          <form onSubmit={handleSubmit}>

            {/* USERNAME */}
            <div className="linput username mb-4">
              <label for="formGroupExampleInput" class="form-label">  <FaUserGraduate />   Username  </label>
                <div className="input-wrapper">
                  <input type="text" placeholder='Joyce' className="form-control" required />
                </div>
            </div>

          {/* PASSWORD */}
          <div className="linput mb-4">
            <label for="formGroupExampleInput" class="form-label">  <RiLockPasswordLine />  Password  </label>
            <div className="input-wrapper">
                  <input type="password" placeholder='********' class="form-control"  required />
            </div>
        </div>
<br />
        <div className="submitbutton">
            <button type="login" className='submitlogin'><span className='fw-bold fs-4'>LOGIN</span></button>
          </div>

<br />
          <div className="forgotpassword">Forgot Password ?</div>
          
        </form>
        </div>
      </div>
    </div>
     );
}
 
export default  Login;