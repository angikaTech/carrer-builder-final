
import {  useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { firebase } from '../otpVarification/mobileOtp/firebase'

// import sendPasswordReset from "../otpVarification/mobileOtp/passwordreset";




  
const PasswordResetLink = () => {
  
  const navigate=  useNavigate();
  const sendPasswordReset= () => {
    
    const email1 = "admin@careerbuildersolutions.org";
    // [START auth_send_password_reset]
    firebase.auth().sendPasswordResetEmail(email1)
      .then(() => {
        alert("Password reset email sent!")
        navigate("/password-massage")
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // navigate("/")
        // ..
      });
    // [END auth_send_password_reset]
    }
  

  

  
  return (

    <div className="App">
      

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-8 mx-auto">
                <div className="auth-form-light text-left p-10">
                  <div className="brand-logo text-center">
                    
                    {/* <img src="../../assets/images/logo.svg" /> */}
                  </div>
          
                  <h4 className="text-center">Want to reset password or forgot password</h4>
                  <h6 className="font-weight-light text-center">Click to Password Reset button.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      {/* <input 
                  
                      onChange={(e) => { setemail(e.target.value) }} 
                      type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" /> */}
                    </div>
                    {/* <div className="form-group">
                      <input onChange={(e) => { setpassword(e.target.value) }} type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div> */}
                    <div className="mt-3 text-center">
                      <Button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={sendPasswordReset}
                    //     href="#
                    // //  ../../index.html
                    //  "
                      >Reset Password</Button>

                      {/* {(user) ? <><br/><button onClick={signout}>Sign-out</button></> : <h3>Loged out</h3>} */}
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>


    </div>



  );
}

export default PasswordResetLink;