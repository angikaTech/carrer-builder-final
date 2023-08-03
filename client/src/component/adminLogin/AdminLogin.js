
import { useContext, useState } from "react";
import { firebase, auth } from '../otpVarification/mobileOtp/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Button } from "react-bootstrap";





const AdminLogin = () => {
  
  const navigate = useNavigate();
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const login = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      
        navigate("/");

        // alert("loged in");
      })
      .catch(alert);
  }
  const signout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const [user] = useAuthState(auth);
  return (

    <div className="App">
      {/* <br/><br/>
        <input type="email" placeholder="Email" 
        onChange={(e)=>{setemail(e.target.value)}}>
        </input>
        <br/><br/>
        <input type="password" placeholder="password" 
        onChange={(e)=>{setpassword(e.target.value)}}>
        </input>
        <br/><br/>
        <button onClick={login}>Sign-up</button>
        {(user) ? <h3>loged in</h3> : <h3>Loged out</h3>}

        <button onClick={signout}>Sign-out</button> */}

      {/* new */}

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo text-center">
                    
                    {/* <img src="../../assets/images/logo.svg" /> */}
                  </div>
          
                  <h4 className="text-center">Hello! Welcome Back..</h4>
                  <h6 className="font-weight-light text-center">login in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input onChange={(e) => { setemail(e.target.value) }} type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                    <input onChange={(e) => { setpassword(e.target.value) }} type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                     
                    </div>
                    <div className="form-group" style={{margin:"10px"}}>
                    <h6><a href="/passwordreset">Forgot Password ?</a></h6> 
                    </div>
                    <div className="mt-3 text-center">
                      <Button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={login}
                    //     href="#
                    // //  ../../index.html
                    //  "
                      >SIGN IN</Button>

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

export default AdminLogin;