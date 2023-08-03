import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';

const AlliedHealthScience = () => {
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

                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/bscanestesiaoperation")}  style={{ margin: "20px" }}>B.SC ANESTESIA AND OPERATION THEATRE TECHNOLOGY</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/bsccardiaccaretech")}  style={{ margin: "20px" }}>B.SC CARDIAC CARE TECH</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/bscmedicallabtech")}  style={{ margin: "20px" }}>B.SC MEDICAL LAB TECH</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/bscperfusiontech")}  style={{ margin: "20px" }}>B.SC PERFUSION TECH</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/bscradiographyimaging")}  style={{ margin: "20px" }}>B.SC RADIOGRAPHY AND IMAGING TECHNOLOGY</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/optometry")}  style={{ margin: "20px" }}>OPTOMETRY</Button>
                <Button variant="outlined"  onClick={() => navigate("/alliedHealthScience/radiotheraphytechonology")}  style={{ margin: "20px" }}>RADIOTHERAPHY TECHONOLOGY</Button>
              

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
 
export default AlliedHealthScience;