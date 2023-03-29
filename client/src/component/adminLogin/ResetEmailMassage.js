
import {  useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { firebase } from '../otpVarification/mobileOtp/firebase'
import AdminLogin from "./AdminLogin";




const ResetEmailMassage = () => {
  
 const navigate =useNavigate();
  
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
          
                  <h4 className="text-center">Password reset link has been sent to your email </h4>
                  <h6 className="font-weight-light text-center"><br></br><Button onClick={(()=>navigate("/adminlogin"))}>Login</Button></h6>

                  <form className="pt-3">
                    <div className="form-group">
                      
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

export default ResetEmailMassage;