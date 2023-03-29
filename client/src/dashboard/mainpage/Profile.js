import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { renderMatches, useParams } from 'react-router-dom';
import { UserContext } from '../../component/adminLogin/UserContext';
import '../mainpage/dashboard.css'
import FooterDashboard from './pagecomponent/FooteerDashbord';
import NavbarDashbord from './pagecomponent/NavBarDashbord';
import SidebarDashboard from './pagecomponent/SidebarDashboard';
import axios from "axios";
import { Spinner } from 'react-bootstrap';




const Profile = () => {

    
    const user = useContext(UserContext);
    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [postObject, setPostObject] = useState("");
    useEffect(() => {

        axios.get(`https://api.careerbuildersolutions.org/studentreg/${id}`).then ( ( response) => {
            // console.log(response.data)
            setPostObject(response.data);
        });
        // await delay(1000);
        setTimeout(() => setLoading(true), 1000);
        
        // axios.get(`https://api.careerbuildersolutions.org/comments/${id}`).then((response) => {
        //     setcomments(response.data);
        // });
    }, []);


    const documentLink = "https://api.careerbuildersolutions.org/image/" + postObject.document;


    return (

        <>


            <div className="container-scroller">

                {/* <!-- partial:../../partials/_navbar.html --> */}
                <NavbarDashbord />
                {/* <!-- partial --> */}
                <div className="container-fluid page-body-wrapper">
                    {/* <!-- partial:../../partials/_sidebar.html --> */}
                    <SidebarDashboard />
                    {/* <!-- partial --> */}

                    <div className="main-panel">

                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                                        <i className="fa fa-home text-white"></i>
                                    </span> Application

                                </h3>


                            </div>
                            {
                                loading ? <>
                                    <div className="row">
                                        <div className="col-md-8 grid-margin stretch-card">
                                            <div className="card" style={{ textAlign: "left" }}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-user"></i> &nbsp;Name</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0">{postObject.name}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-birthday-cake"></i> &nbsp;Date of Birth</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0">{postObject.dob}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-street-view"></i> &nbsp;Gender</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0" style={{textTransform: "capitalize"}}>{postObject.gender}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-envelope"></i> &nbsp;Email</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0"> {postObject.email}</p>
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-phone"></i> &nbsp;Phone</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0"> {postObject.code}{postObject.mobielNumber} </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-book"></i> &nbsp;Program</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0"> {postObject.program}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-book"></i>&nbsp; Course</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0"> {postObject.course}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-map-marker"></i>&nbsp;City</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0">{postObject.cityName}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-map-marker"></i> &nbsp;State</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0">{postObject.state}</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0"><i className="fa fa-map-marker"></i> &nbsp; Country</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <p className="text-muted mb-0"> {postObject.country}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 grid-margin stretch-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <a href={documentLink} className="btn btn-success btn-fw" target="_blank">
                                                        {/* <i className="fa fa-cloud-download"></i> */}
                                                        Preview </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </> :
                                    <center>
                                        <Spinner animation="border" variant="primary" />
                                    </center>
                            }
                        </div>

                        {/* <!-- content-wrapper ends --> */}
                        {/* <!-- partial:../../partials/_footer.html --> */}
                        <FooterDashboard />
                        {/* <!-- partial --> */}
                    </div>
                    {/* <!-- main-panel ends --> */}

                </div>
                {/* <!-- page-body-wrapper ends --> */}

            </div>

        </>
    );
}

export default Profile;