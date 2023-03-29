import React from 'react';
import logo from '../images/logo.png';
import reg from '../images/bg/reg.gif';



const Header = () => {
    return (

        <header id="header" className="header">
            <nav className="navbar navbar-expand-lg cnav-bg navbar-light custom-header ">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"></a> */}
                    <div className="collapse navbar-collapse cnav-bg" id="navbarSupportedContent" >
                        <ul className="navbar-nav col-sm-9 col-md-7">
                            <li>
                                <h5 style={{ color: "#fff", paddingTop: "10px", paddingLeft: "40px" }}> <b>CareerBuilder Solutions</b></h5>
                            </li>
                        </ul>


                        <ul className="navbar-nav col-sm-3 col-md-3" >

                            <li><a href="https://www.facebook.com/careerbuildersolutions" target="_blank" className="ctop-social"><i className="fa fa-facebook text-white"></i></a></li>
                            <li><a href="https://twitter.com/CareerBuilderS9" target="_blank" className="ctop-social"><i className="fa fa-twitter text-white"></i></a></li>
                            <li><a href="https://www.instagram.com/careerbuildersolutions/?hl=en" target="_blank" className="ctop-social"><i className="fa fa-instagram text-white"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCaBEsIdaMOwXbLJJDMNSrqA" target="_blank" className="ctop-social"><i className="fa fa-youtube text-white"></i></a></li>
                        </ul>
                        <div className="navbar-nav col-sm-3 col-md-2"  >

                            <li ><h5 style={{ color: "#fff", paddingTop: "10px", maginRight: "70px" }}><b>Login</b></h5></li>
                            <li><h5 style={{ color: "#fff", paddingTop: "10px", maginRight: "70px" }}> &nbsp;&nbsp;&nbsp;  </h5></li>
                            <li><h5 style={{ color: "#fff", paddingTop: "10px", maginRight: "70px" }}><a href="https://careerbuildersolutions.org/#apply" style={{ color: "#fff" }}><b>Register</b></a></h5></li>

                        </div>
                    </div>
                </div>

            </nav>
            <nav id="navbar_top" className="navbar navbar-expand-sm bg-light navbar-dark nav-shadow " style={{ height: "92px;" }}>
                <div class="container-fluid">
                    <a class="navbar-brand pull-left flip xs-pull-center mb-15" href="https://careerbuildersolutions.org/"><img src={logo} alt="" style={{
                        marginTop: "-10px", marginLeft: "10px",
                        // width: "79px",
                        height: "120px",
                        marginBottom: "-20px"
                    }} /></a>
                    <div className="widget no-border m-0 animateCharcter">
                        <h5><b>"We guide and provide right career"</b></h5>

                        {/* <a className ="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="images/logo.jpeg" alt=""/></a> */}
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{ background: "#7f0100" }}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul class="navbar-nav">


                            <li class="nav-item" ><a href="https://careerbuildersolutions.org/" class="nav-link" style={{ color: "black" }}><b>HOME</b></a></li>
                            <li class="nav-item"><a href="https://careerbuildersolutions.org/#about" class="nav-link" style={{ color: "black" }}><b>ABOUT </b></a></li>
                            <li class="nav-item"><a href="#contact" class="nav-link" style={{ color: "black", paddingRight: "0" }}><b>CONTACT </b> </a></li>
                        </ul>


                    </div>
                </div>
            </nav>



        </header>

    );
}

export default Header;