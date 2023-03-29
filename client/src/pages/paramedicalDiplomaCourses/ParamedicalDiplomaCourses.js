import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';


const ParamedicalDiplomaCourses = () => {
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

                    <Button variant="outlined"  onClick={() => navigate("/paramedicalDiplomaCourses/dipanesthesia")}  style={{ margin: "20px" }}>DIP. IN ANESTHESIA & OTT</Button>
                    <Button variant="outlined"  onClick={() => navigate("/paramedicalDiplomaCourses/dipdialysistechnology")}  style={{ margin: "20px" }}>DIP. IN DIALYSIS TECHNOLOGY</Button>
                    <Button variant="outlined"  onClick={() => navigate("/paramedicalDiplomaCourses/dipmedicalimagingtechnology")}  style={{ margin: "20px" }}>DIP. IN MEDICAL IMAGING TECHNOLOGY</Button>
                    <Button variant="outlined"  onClick={() => navigate("/paramedicalDiplomaCourses/dipmedicallabtechnology")}  style={{ margin: "20px" }}>DIP. IN MEDICAL LAB TECHNOLOGY</Button>
                  

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
 
export default ParamedicalDiplomaCourses;