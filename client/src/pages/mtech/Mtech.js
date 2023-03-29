import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';



const Mtech = () => {
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

                        <Button variant="outlined" onClick={() => navigate("/mtech/aIMachineLearning")} style={{ margin: "20px" }}>Artificial Intelligence and Machine Learning</Button>
                        <Button variant="outlined" onClick={() => navigate("/mtech/computerscienceEngineering")} style={{ margin: "20px" }}>Computer science Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/mtech/constructionTechnology")} style={{ margin: "20px" }}>Construction Technology</Button>
                        <Button variant="outlined" onClick={() => navigate("/mtech/dataScience")} style={{ margin: "20px" }}>Data Science</Button>
                        <Button variant="outlined" onClick={() => navigate("/mtech/vLSIDesignEmbeddedSystem")} style={{ margin: "20px" }}>VLSI Design & Embedded System</Button>
                        <Button variant="outlined" onClick={() => navigate("/mtech/productDesignManufacturing")} style={{ margin: "20px" }}>Product Design & Manufacturing</Button>

                        

                        


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

export default Mtech;
