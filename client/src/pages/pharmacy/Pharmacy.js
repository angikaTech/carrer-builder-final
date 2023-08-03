import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';

const Pharmacy = () => {
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

                    <Button variant="outlined"  onClick={() => navigate("/pharmacy/bpharma")}  style={{ margin: "20px" }}>B. PHARMA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/pharmacy/diplomainpharmacy")}  style={{ margin: "20px" }}>DIPLOMA IN PHARMACY</Button>
                    <Button variant="outlined"  onClick={() => navigate("/pharmacy/dpharma")}  style={{ margin: "20px" }}>D. PHARMA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/pharmacy/mpharma")}  style={{ margin: "20px" }}>M. PHARMA</Button>
                    <Button variant="outlined"  onClick={() => navigate("/pharmacy/pharmad")}  style={{ margin: "20px" }}>PHARMA D</Button>
                   

                        </div>

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
            <Footer />


        </div>
     );
}
 
export default Pharmacy;