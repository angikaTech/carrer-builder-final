import React from 'react';
import logo from '../images/logo.png';
import reg from '../images/bg/reg.gif';



const Header = () => {
    return (

        <header id="header" className="header">
            <nav className="navbar navbar-expand-lg cnav-bg navbar-light custom-header">
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
            <div id="navbar_top" className="header-middle p-0 bg-lightest xs-text-center nav-shadow">
                <div className="container pt-0 pb-0">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-2">
                            <div className="widget no-border m-0">

                                <a class=" pull-left flip xs-pull-center mb-15" href="https://careerbuildersolutions.org/"><img src={logo} alt="" style={{
                                    marginTop: "-10px", marginLeft: "10px",
                                    // width: "79px",
                                    height: "120px",
                                    marginBottom: "-20px"
                                }} /></a>
                                {/* <a className ="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="images/logo.jpeg" alt=""/></a> */}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4" style={{
                            // marginLeft: "-60px", textAling: "center",
                            paddingLeft: "0px",
                            marginTop: "40px"
                        }}>
                            <div className="widget no-border m-0 animateCharcter">
                                <h5><b>"We guide and provide right career"</b></h5>

                                {/* <a className ="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="images/logo.jpeg" alt=""/></a> */}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-3 custom-header" >
                            <a class=" pull-left flip xs-pull-center mb-15" href="https://careerbuildersolutions.org/#apply"><img src={reg} alt="" style={{
                                marginTop: "30px", marginLeft: "60px",
                                // width: "79px",
                                height: "60px",
                                marginBottom: "-20px"
                            }} /></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{ background: "#7f0100" }}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* <div className="col-xs-12 col-sm-4 col-md-2 custom-header">
                            <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0" style={{ paddingTop: "10px" }}>
                                <ul className="list-inline" style={{ display: "flex" }}  >
                                    <li><i className="fa fa-phone-square text-theme-colored font-36 mt-5 sm-display-block"></i> &nbsp;&nbsp;</li>
                                    <li>
                                        <a href="#" className="font-12 text-gray text-uppercase" >Call us today!</a>
                                        <h5 className="font-14 m-0"> +91-7204238483</h5>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-xs-12 col-sm-4 col-md-2 custom-header" style={{ paddingTop: "10px" }}>
                            <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0" >
                                <ul className="list-inline" style={{ display: "flex" }}>
                                    <li><i className="fa fa-clock-o text-theme-colored font-36 mt-5 sm-display-block"></i>  &nbsp;&nbsp;</li>
                                    <li>
                                        <a href="#" className="font-12 text-gray text-uppercase">We are open!</a>
                                        <h5 className="font-13 text-black m-0">  9:00 AM-6:00 PM</h5>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xs-12 col-sm-4 col-md-2 "
                        // style={{backgroundColor:"black"}} 
                        >
                            <nav id="menuzord" class="menuzord bg-theme-colored pull-left flip menuzord-responsive " >
                                <ul class="menuzord-menu" style={{ display: "flex", padding: "20px", backgroundColor: "#fcfcfc", }}>
                                    <li class="active" ><a href="https://careerbuildersolutions.org/" style={{ backgroundClor: "black" }}><b>HOME</b></a></li>
                                    <li ><a href="https://careerbuildersolutions.org/#about" style={{ color: "black" }}><b>ABOUT </b></a></li>
                                    <li><a href="#contact" style={{ color: "black", paddingRight: "0" }}><b>CONTACT </b> </a></li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;