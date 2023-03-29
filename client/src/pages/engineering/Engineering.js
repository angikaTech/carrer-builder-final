import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/header/Footer';
import Header from '../../component/header/Header';
import { Button } from '@mui/material';



const Engineering = () => {
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

                        <Button variant="outlined" onClick={() => navigate("/engineering/cse")} style={{ margin: "20px" }}>CSE (IOT &amp; Cyber Security including Block Chain Technology)</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/computerScienceEnginnering")} style={{ margin: "20px" }}>Computer Science &amp; Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/mechanicalEngineering")} style={{ margin: "20px" }}>Mechanical Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/aidsEnginnering")} style={{ margin: "20px" }}>AI &amp; DS Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/informationScienceEngineering")} style={{ margin: "20px" }}>Information Science &amp; Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/electronicsCommunication")} style={{ margin: "20px" }}>Electronics &amp; Communications Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/electronicsElectronicsEngineering")} style={{ margin: "20px" }}>ELECTRICAL &amp; ELECTRONICS ENGINEERING</Button>

                        <Button variant="outlined" onClick={() => navigate("/engineering/civilEngineering")} style={{ margin: "20px" }}>Civil Engineering</Button>
                        {/* <Button variant="outlined" onClick={() => navigate("/engineering/mtechVlsiDesine")} style={{ margin: "20px" }}>M.Tech (VLSI Design &amp; Embedded System, Product Design &amp; Manufacturing, Construction
                            Technology)</Button> */}
                        <Button variant="outlined" onClick={() => navigate("/engineering/electricalEngineering")} style={{ margin: "20px" }}>Electrical Engineering</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/artificialIntelligenceMachineLearning")} style={{ margin: "20px" }}>Artificial Intelligence and Machine Learning</Button>
                        <Button variant="outlined" onClick={() => navigate("/engineering/architecture")} style={{ margin: "20px" }}>Architecture</Button>
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

export default Engineering;
