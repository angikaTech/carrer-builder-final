import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firebase, auth } from '../../../component/otpVarification/mobileOtp/firebase'


const NavbarDashbord = () => {
    const navigate = useNavigate();

    const signout = () => {
        firebase.auth().signOut().then(() => {
            navigate("/");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return ( 
        <>
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        {/* <h4 className="navbar-brand brand-logo" style= {{color:"#af67ff"}}>Home</h4> */}
                        <a className="navbar-brand brand-logo" href="/"><h1  style= {{color:"#af67ff"}}>Home</h1></a>
                        {/* <a className="navbar-brand brand-logo" href="../../index.html"><img src="../../assets/images/logo.svg" alt="logo" /></a> */}
                        <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            {/* <span className="fa fa-bars"></span> */}
                        </button>

                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-profile dropdown">
                                <a className="nav-link " id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="nav-profile-img">
                                        <img src="../../assets/images/faces-clipart/pic-5.png" alt="image" />
                                        <span className="availability-status online"></span>
                                    </div>
                                    <div className="nav-profile-text">
                                        <p className="mb-1 text-black">Admin</p>
                                    </div>
                                    
                                </a>
                                {/* <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">

                                    <div className="dropdown-divider" ></div>
                                    <a className="dropdown-item" href="#" onClick={signout} style={{color:"blue"}} >
                                        <i className="mdi mdi-logout me-2 text-primary" style={{color:"blue"}}></i> Signout </a>
                                </div> */}
                                
                            </li>
                            <a  className="text-black" href="#" onClick={signout} style={{textDecoration:"none"}} >
                                        <i className="fa fa-sign-out  me-2 text-black" style={{color:"blue"}}></i> Signout </a>


                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
        </>
     );
}
 
export default NavbarDashbord;