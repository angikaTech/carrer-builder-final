import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';

const HigherEducation = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <Header />
          
            <div className="container" style={{ padding: "100px" }}>
            <br></br>
                    <div className='col-sm-12' >
                        {/* <h3 className="title line-bottom mb-20 font-28 mt-0 line-height-1">Choose your <span className="text-theme-color-2 font-weight-400">Program</span></h3> */}
                        <h3 className="title  mb-20 font-28 mt-0 line-height-1">Choose your Program</h3>
                    </div>
                <div className=" col-sm-12" >
                    <div className=" content">

                    <Button variant="outlined"  onClick={() => navigate("/highereducation/bba")}  style={{ margin: "20px" }}>BBA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/bbaaviation")}  style={{ margin: "20px" }}>BBA (AVIATION)</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/bca")}  style={{ margin: "20px" }}>BCA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/bcom")}  style={{ margin: "20px" }}>B.COM</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/bcomlogistics")}  style={{ margin: "20px" }}>B.COM (LOGISTICS)</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/mbahrmarketing")}  style={{ margin: "20px" }}> MBA(HR / MARKETING / FINANCE / SMES MANAGEMENT / BFIS MANAGEMENT / HEALTH CARE MANAGEMENT)</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/mca")}  style={{ margin: "20px" }}>MCA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/highereducation/mcom")}  style={{ margin: "20px" }}>M.Com</Button>

                   

                        </div>
                        <br /><br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/")}
                    >
                        Back
                    </Button>

                </div>


            </div>
            <Footer />


        </div>
     );
}
 
export default HigherEducation;