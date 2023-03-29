import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../mainpage/dashboard.css'
import FooterDashboard from './pagecomponent/FooteerDashbord';
import NavbarDashbord from './pagecomponent/NavBarDashbord';
import SidebarDashboard from './pagecomponent/SidebarDashboard';

const List = () => {
    const [ListOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("https://api.careerbuildersolutions.org/studentreg").then((Response) => {
            setListOfPosts(Response.data);

        });
    }, []);

    const studentdelete= (id)=>{
        axios.delete(`https://api.careerbuildersolutions.org/studentdelete/${id}`).then((Response) => {
           window.location.reload();
        // setListOfPosts(setListOfPosts.filter((val)=>{
        //         return val._id !== id;
        //     }));

        });

    }
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
                    <div className="main-panel ">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                                        <i className="fa fa-home text-white"></i>
                                    </span> Applications
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">

                                    </ul>
                                </nav>
                            </div>
                            <div className=" col-sm-6 col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title"></h4>

                                        {/* </p> */}
                                        <div className="col-sm-6 col-lg-12 stricket" style={{overflowX:"auto"}}>
                                            <table className=" table table-striped " >
                                                <thead >
                                                    <tr >
                                                        <th  style={{ minwidth: "100px" }}> Name </th>
                                                        <th> Email </th>
                                                        <th> Phone </th>
                                                        {/* <th> Course </th> */}
                                                        {/* <th> Registration Date</th> */}
                                                        <th> Profile </th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                {ListOfPosts.map((value, key) => {
                                                    return (
                                                        <tbody key={key}>
                                                            {/* <tr>
                                                <td>Pradeep </td>
                                                <td> Pradeep@gmail.com </td>
                                                <td> +91-9900115577</td>
                                                <td> M.Tech</td>
                                                <td> 20-6-2022</td>
                                                <td><a href="/profile" className="btn btn-block btn-lg btn-gradient-success mt-4">View Profile</a> </td>
                                            </tr> */}
                                                            <tr >
                                                                <td  >{value.name} </td>
                                                                <td> {value.email} </td>
                                                                <td>{value.code}{value.mobielNumber}</td>
                                                                {/* <td>{value.course}</td> */}
                                                                {/* <td>{value.Timestamp}</td> */}
                                                                <td  ><a onClick={() => {
                                                                    navigate(`/profile/${value._id}`);
                                                                    window.location.reload();
                                                                }} className="btn btn-block btn-lg btn-gradient-success mt-4" >View Profile</a> </td>
                                                                {/* <td className="btn btn-block btn-lg btn-gradient-denger mt-4">Delete</td> */}
                                                                <td  ><a onClick={()=>{
                                                                    studentdelete(value._id)
                                                                }} className="btn btn-block btn-lg btn-danger mt-4" >Delete</a> </td>
                                                                
                                                            </tr>
                                                        </tbody>
                                                    );
                                                })}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default List;