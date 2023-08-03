import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
// import '../../component/css/style-main.css';
import Image from '../../component/images/bg/bg12.png'
import Image2 from '../../component/images/bg/bg2.jpg'
import Image4 from '../../component/images/bg/bg4.jpg'
import banner1 from '../../component/images/bg/banner/banner1.png'
import banner2 from '../../component/images/bg/banner/banner2.jpg'
import bannerEngineering from '../../component/images/bg/banner/bannerEngineering.jpg'
import bannerManagement from '../../component/images/bg/banner/bannerManagement.jpg'
import bannerMedical from '../../component/images/bg/banner/bannerMedical.jpg'

import { Carousel } from 'react-bootstrap'
import { Button } from '@mui/material';
const Home = () => {

    const navigate = useNavigate();

    return (
        <div>

            <Header />

            <Carousel indicators={false} >
                {/* <Carousel.Item interval={1000}>
                <section  style={{backgroundColor:"#090979",minHeight:"500"}}>
                <div className="container-fluid p-5  text-center d-block w-100"  >
                    <h1 style={{color:"white"}}>Admission Open for 2022-23</h1>
                    <div className="custom-button" style={{marginTop:"68px"}} >
                        <a href="#apply"  class="btn btn-outline-danger" >Apply Now</a> </div>
                </div>

                <svg id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 360" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs>
                    <path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,324L60,282C120,240,240,156,360,102C480,48,600,24,720,60C840,96,960,192,1080,192C1200,192,1320,96,1440,78C1560,60,1680,120,1800,126C1920,132,2040,84,2160,102C2280,120,2400,204,2520,228C2640,252,2760,216,2880,210C3000,204,3120,228,3240,204C3360,180,3480,108,3600,114C3720,120,3840,204,3960,222C4080,240,4200,192,4320,150C4440,108,4560,72,4680,48C4800,24,4920,12,5040,60C5160,108,5280,216,5400,240C5520,264,5640,204,5760,204C5880,204,6000,264,6120,288C6240,312,6360,300,6480,264C6600,228,6720,168,6840,126C6960,84,7080,60,7200,84C7320,108,7440,180,7560,186C7680,192,7800,132,7920,126C8040,120,8160,168,8280,204C8400,240,8520,264,8580,276L8640,288L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">
                    </path>
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{transform:"translate(0, 50px)", opacity:"0.9"}} fill="url(#sw-gradient-1)" d="M0,36L60,66C120,96,240,156,360,180C480,204,600,192,720,168C840,144,960,108,1080,120C1200,132,1320,192,1440,186C1560,180,1680,108,1800,78C1920,48,2040,60,2160,90C2280,120,2400,168,2520,210C2640,252,2760,288,2880,282C3000,276,3120,228,3240,180C3360,132,3480,84,3600,78C3720,72,3840,108,3960,150C4080,192,4200,240,4320,252C4440,264,4560,240,4680,240C4800,240,4920,264,5040,270C5160,276,5280,264,5400,216C5520,168,5640,84,5760,72C5880,60,6000,120,6120,168C6240,216,6360,252,6480,258C6600,264,6720,240,6840,240C6960,240,7080,264,7200,270C7320,276,7440,264,7560,228C7680,192,7800,132,7920,132C8040,132,8160,192,8280,228C8400,264,8520,276,8580,282L8640,288L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">
                    </path>
                    <defs>
                        <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
                            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{transform:"translate(0, 100px)", opacity:"0.8"}} fill="url(#sw-gradient-2)" d="M0,216L60,180C120,144,240,72,360,72C480,72,600,144,720,180C840,216,960,216,1080,222C1200,228,1320,240,1440,216C1560,192,1680,132,1800,132C1920,132,2040,192,2160,198C2280,204,2400,156,2520,162C2640,168,2760,228,2880,252C3000,276,3120,264,3240,216C3360,168,3480,84,3600,54C3720,24,3840,48,3960,90C4080,132,4200,192,4320,204C4440,216,4560,180,4680,168C4800,156,4920,168,5040,186C5160,204,5280,228,5400,240C5520,252,5640,252,5760,210C5880,168,6000,84,6120,60C6240,36,6360,72,6480,108C6600,144,6720,180,6840,180C6960,180,7080,144,7200,156C7320,168,7440,228,7560,258C7680,288,7800,288,7920,258C8040,228,8160,168,8280,162C8400,156,8520,204,8580,228L8640,252L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">

                    </path>
                </svg>
            </section>
                   
                   
                </Carousel.Item> */}
                {/* <Carousel.Item interval={1000}>
                   <a href='#apply'>
                    <img
                        className="d-block w-100"
                        src={Image}
                        alt="Third slide"
                        height="500px"
                    /></a> 
                    
                </Carousel.Item> */}
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                        height="500px"
                    />
                    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                        height="500px"
                    />
                    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bannerEngineering}
                        alt="Third slide"
                        height="500px"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bannerManagement}
                        alt="Third slide"
                        height="500px"
                    />

                </Carousel.Item> <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bannerMedical}
                        alt="Third slide"
                        height="500px"
                    />

                </Carousel.Item>



            </Carousel>





            <div
            //  style={{ backgroundImage: "url(http://localhost:3000/images/book.jpg)"  }}
            >


                <div className="container-fluid mt-10" id="apply" style={{ background: "#f6f7f9" }}>


                    <div class="container-fluid p-5  text-white text-center" style={{ marginTop: "-10px" }}>
                        <h2 style={{ marginTop: "50px" }}>Choose Your Courses</h2>
                    </div>


                    <div class="container-fluid" style={{ width: "94%", marginTop: "80px" }}>

                        <div class="row" data-masonry="{&quot;percentPosition&quot;: true }">
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/eng.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/engineering")}>Engineering</Button>
                            </div>

                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/mtech.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/mtech")}>M.Tech</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/higher-education.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/highereducation")}>Higher Education</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/pharmacy.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/pharmacy")}>PHARMACY</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/nursing.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/nursing")}>Nursing</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/physical-therapy.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/physiotherapy")}>Physiotherapy / <br></br> BPT*</Button>
                            </div>

                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/allied.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/alliedHealthScience")}>Allied Health Sciences</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-6" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/Paramedical.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/paramedicalDiplomaCourses")}>Paramedical <br></br>Diploma Courses</Button>
                            </div>

                            <div class="col-sm-6 col-lg-4 col-md-2" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/others.png" style={{ width: "70px" }} alt="" />
                                <Button style={{ margin: "20px", fontWeight: "700", color: "#333", fontSize: "15px" }} onClick={() => navigate("/others")}>Others</Button>
                            </div>

                        </div>

                    </div>


                    {/* <div class="container-fluid  text-center" style={{width: "94%", marginTop: "80px"}}>
                       <div class="row" data-masonry="{&quot;percentPosition&quot;: true }">
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/eng.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/engineering")}>Engineering</Button>
                            </div>
                             <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/mtech.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/mtech")}>M.Tech</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                               <img src="images/icon/higher-education.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/highereducation")}>Higher Education</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/pharmacy.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/pharmacy")}>PHARMACY</Button>
                            </div>
                             <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                               <img src="images/icon/nursing.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/nursing")}>Nursing</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                               <img src="images/icon/physical-therapy.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/physiotherapy")}>Physiotherapy / BPT*</Button>
                            </div>
                           
                            <div class="col-sm-6 col-lg-4 col-md-4" style={{ marginBottom: "26px" }}>
                               <img src="images/icon/allied.png" style={{width: "70px"}}alt=""/> <br></br>
                                <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/alliedHealthScience")}>Allied Health Sciences</Button>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-md-6" style={{ marginBottom: "26px"  }}>
                               <img src="images/icon/Paramedical.png" style={{width: "70px" }}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/paramedicalDiplomaCourses")}>Paramedical Diploma Courses</Button>
                            </div>
                           
                            <div class="col-sm-6 col-lg-4 col-md-2" style={{ marginBottom: "26px" }}>
                                <img src="images/icon/others.png" style={{width: "70px"}}alt=""/> <br></br>
                               <Button size="medium" style={{ margin: "20px" }} onClick={() => navigate("/others")}>Others</Button>
                            </div>
                            
                        </div>

                    </div> */}



                </div>

            </div>
            {/* <section  style={{backgroundColor:"#090979",minHeight:"500"}}>
                <div className="container-fluid p-5  text-center d-block w-100"  >
                    <h1 style={{color:"white"}}>Admission Open for 2022-23</h1>
                    <div className="custom-button" style={{marginTop:"68px"}} >
                        <a href="#apply"  class="btn btn-outline-danger" >Apply Now</a> </div>
                </div>

                <svg id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 360" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs>
                    <path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,324L60,282C120,240,240,156,360,102C480,48,600,24,720,60C840,96,960,192,1080,192C1200,192,1320,96,1440,78C1560,60,1680,120,1800,126C1920,132,2040,84,2160,102C2280,120,2400,204,2520,228C2640,252,2760,216,2880,210C3000,204,3120,228,3240,204C3360,180,3480,108,3600,114C3720,120,3840,204,3960,222C4080,240,4200,192,4320,150C4440,108,4560,72,4680,48C4800,24,4920,12,5040,60C5160,108,5280,216,5400,240C5520,264,5640,204,5760,204C5880,204,6000,264,6120,288C6240,312,6360,300,6480,264C6600,228,6720,168,6840,126C6960,84,7080,60,7200,84C7320,108,7440,180,7560,186C7680,192,7800,132,7920,126C8040,120,8160,168,8280,204C8400,240,8520,264,8580,276L8640,288L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">
                    </path>
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{transform:"translate(0, 50px)", opacity:"0.9"}} fill="url(#sw-gradient-1)" d="M0,36L60,66C120,96,240,156,360,180C480,204,600,192,720,168C840,144,960,108,1080,120C1200,132,1320,192,1440,186C1560,180,1680,108,1800,78C1920,48,2040,60,2160,90C2280,120,2400,168,2520,210C2640,252,2760,288,2880,282C3000,276,3120,228,3240,180C3360,132,3480,84,3600,78C3720,72,3840,108,3960,150C4080,192,4200,240,4320,252C4440,264,4560,240,4680,240C4800,240,4920,264,5040,270C5160,276,5280,264,5400,216C5520,168,5640,84,5760,72C5880,60,6000,120,6120,168C6240,216,6360,252,6480,258C6600,264,6720,240,6840,240C6960,240,7080,264,7200,270C7320,276,7440,264,7560,228C7680,192,7800,132,7920,132C8040,132,8160,192,8280,228C8400,264,8520,276,8580,282L8640,288L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">
                    </path>
                    <defs>
                        <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
                            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{transform:"translate(0, 100px)", opacity:"0.8"}} fill="url(#sw-gradient-2)" d="M0,216L60,180C120,144,240,72,360,72C480,72,600,144,720,180C840,216,960,216,1080,222C1200,228,1320,240,1440,216C1560,192,1680,132,1800,132C1920,132,2040,192,2160,198C2280,204,2400,156,2520,162C2640,168,2760,228,2880,252C3000,276,3120,264,3240,216C3360,168,3480,84,3600,54C3720,24,3840,48,3960,90C4080,132,4200,192,4320,204C4440,216,4560,180,4680,168C4800,156,4920,168,5040,186C5160,204,5280,228,5400,240C5520,252,5640,252,5760,210C5880,168,6000,84,6120,60C6240,36,6360,72,6480,108C6600,144,6720,180,6840,180C6960,180,7080,144,7200,156C7320,168,7440,228,7560,258C7680,288,7800,288,7920,258C8040,228,8160,168,8280,162C8400,156,8520,204,8580,228L8640,252L8640,360L8580,360C8520,360,8400,360,8280,360C8160,360,8040,360,7920,360C7800,360,7680,360,7560,360C7440,360,7320,360,7200,360C7080,360,6960,360,6840,360C6720,360,6600,360,6480,360C6360,360,6240,360,6120,360C6000,360,5880,360,5760,360C5640,360,5520,360,5400,360C5280,360,5160,360,5040,360C4920,360,4800,360,4680,360C4560,360,4440,360,4320,360C4200,360,4080,360,3960,360C3840,360,3720,360,3600,360C3480,360,3360,360,3240,360C3120,360,3000,360,2880,360C2760,360,2640,360,2520,360C2400,360,2280,360,2160,360C2040,360,1920,360,1800,360C1680,360,1560,360,1440,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L0,360Z">

                    </path>
                </svg>
            </section> */}
            <section id="event">
                <div className="container col-md-12">

                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="images/photos/1.png" className="img-fullwidth" alt="" />
                            </div>
                            <div className="col-md-7 pb-sm-20 row " >
                                <div className='col-sm-12'>
                                    {/* <h3 className="title line-bottom mb-20 font-28 mt-0 line-height-1">Why <span className="text-theme-color-2 font-weight-400">Choose Us</span> ?</h3> */}
                                    <h3 className="title mb-20 font-28 mt-0 line-height-1 ">Why Choose Us ?</h3>
                                </div>
                                {/* <h3 className="title line-bottom mb-20 font-28 mt-0 line-height-1">Why <span className="text-theme-color-2 font-weight-400">Choose Us</span> ?</h3> */}
                                <p className="mb-20" style={{ textAlign: "justify" }}>Our institute works to enhance excellence in education. With our unique capabilities, successful track record, and continued growth, Career Building Solutions has become one of the most active, innovative, and well-respected organizations in the field of Admission Guidelines, Foreign Education, and Career Counseling. The goal of the career counseling offered by the institute is to build a good relationship with the students before helping them and then to guide and recommend the best course possible for the students considering their qualifications and level of interest.</p>
                                <p className="mb-20" style={{ textAlign: "justify" }}>We understand how important initial decisions are in a student&#39;s life. We understand the plight of students and their parents when it comes to making the right career decisions. We listen carefully to everyone&#39;s doubts and help them to discover themselves so that they can choose a career where they can excel.</p>
                                <div className="col-sm-6 col-md-3 wow fadeInLeft " data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="icon-box text-center pl-0 pr-0 mb-0">
                                        <a href="#" className="icon bg-theme-colored icon-circled icon-border-effect effect-circle icon-md">
                                            <i className="pe-7s-phone text-white"></i>
                                        </a>
                                        <h5 className="icon-box-title mt-15 mb-10 letter-space-4 text-uppercase"><strong>Learn</strong></h5>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="icon-box text-center pl-0 pr-0 mb-0">
                                        <a href="#" className="icon bg-theme-color-2 icon-circled icon-border-effect effect-circle icon-md">
                                            <i className="pe-7s-pen text-white"></i>
                                        </a>
                                        <h5 className="icon-box-title mt-15 mb-10 letter-space-4 text-uppercase"><strong>lead</strong></h5>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="icon-box text-center pl-0 pr-0 mb-0">
                                        <a href="#" className="icon bg-theme-colored icon-circled icon-border-effect effect-circle icon-md">
                                            <i className="pe-7s-light text-white"></i>
                                        </a>
                                        <h5 className="icon-box-title mt-15 mb-0 letter-space-4 text-uppercase"><strong>Grow</strong></h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/*  Section: Client Say  */}
            <section className="" style={{ backgroundColor: "rgba(32,44,69,.9)" }}  >
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2 className="line-bottom-center text-gray-lightgray text-center mt-0 mb-30" id="about">About us</h2>
                            <div className="owl-carousel-1 col" data-dots="true">
                                <div className="">
                                    <div className=" text-center">
                                        {/* <div className="thumb"><img className="img-circle" alt="" src="images/testimonials/3.jpg" /></div> */}
                                        <div className="content pt-10">
                                            <p className="font-15 text-white" style={{ textAlign: "justify" }} >CareerBuilder Solutions is a respected service provider of career counseling and admission guidance, located in 4 locations in India (Bangalore, Patna, Ranchi, Bhubaneswar) and Janakpur, Nepal. We ensure the quality of our services and the transparency of our procedures. Our services are among the highest and best in career consultancy among the places mentioned above. We understand student's needs through personal interactions and give them a collection of options that enable them to fulfil their career ambitions.</p>
                                            {/* <i className="fa fa-quote-right font-36 mt-10 text-gray-lightgray"></i> */}
                                            {/* <h4 className="author text-theme-color-2 mb-0">Catherine Grace</h4> */}
                                            {/* <h6 className="title text-white mt-0 mb-15">Designer</h6> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </div>

    );
}

export default Home;