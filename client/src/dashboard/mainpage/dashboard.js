import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../mainpage/dashboard.css'
import FooterDashboard from './pagecomponent/FooteerDashbord';
import NavbarDashbord from './pagecomponent/NavBarDashbord';
import SidebarDashboard from './pagecomponent/SidebarDashboard';
// import '../css/style.css'
// import '../css/style.css.map'
import {Helmet} from "react-helmet";
// import ScriptTag from 'react-script-tag';
// import "../vendors/js/vendor.bundle.base"

const Dashboard = () => {
    
    const [ListOfPosts, setListOfPosts] = useState([]);
 let history = useNavigate()
 const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
 
    useEffect(() => {
        axios.get("https://api.careerbuildersolutions.org/studentreg").then((Response) => {
            setListOfPosts(Response.data);
            

        });
    },[]);
         
    return (
        <>

        
         {/* {ListOfPosts.map((value, key) => {
                    return (
                        <div key={key} className="post"
                        //  onClick = { () => {
                        //     history.push(`/post/${value.id}`);
                        //     }}
                            >
                             <div className="name">{value.name}</div>
                              <div className="body">{value.email}</div>
                            <div className="footer">{value.state}</div>
                        </div>



                    );
                })} */}
            <div className="container-scroller">
                {/* <!-- partial:../../partials/_navbar.html --> */}
                <NavbarDashbord/>
                {/* <!-- partial --> */}
                <div className="container-fluid page-body-wrapper">
                    {/* <!-- partial:../../partials/_sidebar.html --> */}
                    <SidebarDashboard/>
                    {/* <!-- partial --> */}
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                                    <i className="fa fa-home text-white"></i>
                                    </span> Dashboard
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {/* <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i> */}
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-12 stretch-card grid-margin" style={{height:"20px"}}>
                                    <div className="card bg-gradient-danger card-img-holder text-white">
                                        <div className="card-body">
                                            <img src="../../assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                            <h4 className="font-weight-normal mb-3">Total Applications<i className="mdi mdi-chart-line mdi-24px float-right"></i>
                                            </h4>
                                            <h1 className="mb-5">{ListOfPosts.length}</h1>
                                            <a className="nav-link" href="/list"><h6 className="card-text">View All</h6></a>
                                     
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* <!-- content-wrapper ends --> */}
                        {/* <!-- partial:../../partials/_footer.html --> */}
                       
                        <FooterDashboard/>
                        {/* <button onClick={() => window.location.reload()}>click</button> */}
                        {/* <!-- partial --> */}
                    </div>
                    {/* <!-- main-panel ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>

        </>
    );
}

export default Dashboard;