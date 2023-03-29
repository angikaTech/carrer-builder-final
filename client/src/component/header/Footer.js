import React from 'react';
import logo from '../images/logo.jpeg'
import Footerimage from '../images/byMe/bg2.jpg'
import logo2 from '../images/white logo.png';



const Footer = () => {
    var styles = {
        links: {
            "a:hover": { color: "red", textDecoration: "none" }
        }
    }


    return (




        <footer data-bg-img="images/bg/bg5.jpg" style={{ backgroundImage: `url(${Footerimage})`, color: "#fff" }}>
            <div className="container" style={{ paddingTop: "70px", paddingBottom: "10px" }}>
                <div className="row border-bottom">

                    <div className="col-sm-3 col-md-5">

                        <div className="widget dark">


                            <h4 className="widget-title">CareerBuilder Solutions</h4>

                            <p style={{ textAlign: "justify", marginTop: "10px" }}>Our institute works to enhance excellence in education. With our unique capabilities, successful track record,
                                and continued growth, CareerBuilder Solutions has become one of the most active, innovative,
                                and well-respected organizations in  the field of Admission Guidelines, Foreign Education, and Career Counseling.</p>
                            <ul className="list-border" style={{ marginTop: "40px" }}>
                                <a href="https://www.facebook.com/careerbuildersolutions" target="_blank" className="ctop-social"><i className="fa fa-facebook text-white"></i></a>
                                <a href="https://twitter.com/CareerBuilderS9" target="_blank" className="ctop-social"><i className="fa fa-twitter text-white"></i></a>

                                <a href="https://www.instagram.com/careerbuildersolutions/?hl=en" target="_blank" className="ctop-social"><i className="fa fa-instagram text-white"></i></a>
                                <a href="https://www.youtube.com/channel/UCaBEsIdaMOwXbLJJDMNSrqA" target="_blank" className="ctop-social"><i className="fa fa-youtube text-white"></i></a>

                            </ul>
                           
                        </div>
                       
                    </div>
                    <div className="col-sm-6 col-md-2">
                        <div className="widget dark">
                            <h4 className="widget-title">Our Centers</h4>
                            <ul className="list angle-double-right list-border" style={{ marginTop: "30px" }}>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Bangalore</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Patna</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Ranchi</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Bhubaneswar</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2">
                        <div className="widget dark">
                            {/* <h4 className ="widget-title">Our Centers</h4> */}
                            <ul className="list angle-double-right list-border" style={{ marginTop: "55px" }}>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Muzaffarpur</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Sitamarhi</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Darbhanga</li>
                                <li className="footerList"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> Janakpur(Nepal)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 style">
                        <div className="widget dark">
                            <h4 id="contact" className="widget-title line-bottom-theme-colored-2">Contact Us</h4>
                            <div className="opening-hours">
                                <ul className="list-border" style={{ marginop: "30px" }}>
                                    <i className="fa fa-phone text-theme-color-2 mr-5" style={{ color: "white" }}> INDIA </i>
                                    <li className="footerList" >
                                        <a className="" href="#" style={{ color: "#0d6efd", textDecoration: "none" }}>+91-7204238483</a> <br />
                                        <a className="" href="#" style={{ color: "#0d6efd", textDecoration: "none" }}>+91-8618355370</a> <br />
                                        <i className="fa fa-phone text-theme-color-2 mr-5" style={{ color: "white" }}> NEPAL </i> <br />
                                        <a className="" href="#" style={{ color: "#0d6efd", textDecoration: "none" }}>+977-9801610687</a>
                                    </li>
                                    <li className="footerList"> <i className="fa fa-envelope-o text-theme-color-2 mr-5" style={{ color: "white" }}></i> <a className="" href="#" style={{ color: "#0d6efd", textDecoration: "none" }}>info@careerbuildersolutions.org</a> </li>
                                    <li className="footerList"> <i className="fa fa-globe text-theme-color-2 mr-5" style={{ color: "white" }}></i> <a className="" href="#" style={{ color: "#0d6efd", textDecoration: "none" }}>www.careerbuildersolutions.org</a> </li>

                                </ul>

                            </div>
                            
                        </div>
                        <ul className=""style={{marginRight:"-20px"}} >
                                <a 
                                href="/termsandcondition"  
                                className="ctop-social" style={{color:"white"}}>Terms and Conditions</a>
                                <a 
                                href="/privacy" 
                                className="ctop-social" style={{color:"white"}}>Privacy Policy</a>

                               

                            </ul>
                    </div>
                </div>

            </div>
            <div className=""  >

            </div>
            <div className="container">
                <div className="row">
                    <center>
                        <div className="col-md-12" >
                            <p className="font-11 text-black-777 m-0">Copyright ©2022  <a href="https://careerbuildersolutions.org/" style={{ color: "#0d6efd", textDecoration: "none" }}> CareerBuilder Solutions </a>. All Rights Reserved</p></div>
                        {/* <div className="col-md-3 text-right"><p className="font-11 text-black-777 m-0">Developed by <a href="https://www.angikatechnologies.com/" style={{ color: "#0d6efd",textDecoration: "none" }}>Angika Technologies Pvt Ltd.</a></p></div> */}
                        </center>
                </div>

            </div>

        </footer>

    );
}

export default Footer;