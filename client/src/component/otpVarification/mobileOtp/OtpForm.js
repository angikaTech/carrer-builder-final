import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { firebase, auth } from '../../../component/otpVarification/mobileOtp/firebase';

// Otp start
const Login = () => {
    const {
        control,
        formState: { errors },
        register,
        getValues,
    } = useFormContext();
    // const { register } = useFormContext();
    const values = getValues();
    // Inputs
    // const [mynumber, setnumber] = useState("");
    const mynumber = values.code + values.mobielNumber;
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    const [yes, setYes] = useState(false);

    // Sent OTP


    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            // alert("code sent")
            setshow(true);

        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success

            // alert("verified")
            setYes(true);
            firebase.auth().signOut();
            // setshow(false);
        }).catch((err) => {
            alert("Wrong code");
        })
    }
    // const [user] = useAuthState(auth);

    //signout
    // const signout =()=> {
    //     firebase.auth().signOut().then(() => {
    //     // Sign-out successful.
    //   }).catch((error) => {
    //     // An error happened.
    //   });
    //   }


    //email part of js
    const [otpe, setOtpe] = useState('');
    const [userotp, setUserotp] = useState('');
    const [Varified, setVarified] = useState(false);
    const [show1, setshow1] = useState(false);

    const email = values.email;
    const genrateotp = async () => {
        var genrate = Math.floor(1000 + Math.random() * 9000);
        setOtpe(genrate);
        // console.log(genrate);
        const data = { email, genrate }
        try {
            const res1 = await axios.post("https://api.careerbuildersolutions.org/otp", data).then((response) => {
                console.log("mail is sent ")
                setshow1(true);

            })

        } catch (err) { alert("not submitted") }

    }



    // const isequal = (otp,userotp)=>{
    // 	const otpkeys= Object.keys(otp) 
    // 	const userotpkeys= Object.keys(userotp)
    // }
    const verify = () => {
        const a = parseFloat(otpe);
        const b = parseFloat(userotp);

        if (a === b) {
            setVarified(true)
        } else {
            setVarified(false)
            alert("Wrong otp")
        }


    }

    return (
        <div>
            <section class="vh-80" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">

                            <div class="card shadow-2-strong " style={{ borderRadius: "1rem", padding: "27px" }}>

                                <div>
                                    <img src="images/otp.svg" style={{ width: "200px" }} alt="" />
                                </div>


                                <div class="card-body p-5 text-center">


                                    <div class="form-outline mb-4" style={{ display: !show ? "block" : "none" }}>
                                        <h3 class="">Verify Phone Number</h3>
                                        <input type="text" class="form-control " value={mynumber}
                                            // onChange={(e) => {
                                            // 	setnumber(e.target.value)
                                            // }}
                                            hidden
                                            placeholder="phone number" />




                                        <div id="emailHelp" class="form-text">We'll  Share the Verification Code to <span style={{ color: "blue" }}>{values.code}{values.mobielNumber}</span></div>
                                        <br />
                                        <div class="mb-3">
                                            <button type="button" class="btn btn-primary" onClick={signin}>Send OTP</button>
                                        </div>
                                        <h4 style={{ color: "red" }}> <b>Not Verified</b></h4>
                                        <div class="mb-3">
                                            <div id="recaptcha-container"></div>
                                        </div>



                                    </div>

                                    {/* {user ? "Varified" : " Not Varified"} */}
                                    {yes ? <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <h3 style={{ textAlign: "center", color: "green" }}>Mobile number verified</h3>
                                            </div>
                                            {/* <div className="col-xs-12 col-sm-6 col-md-4"></div> */}
                                            <div className="col-xs-12 col-sm-12 col-md-12">

                                                <br />
                                              
                                                <br />
                                                {/* <Button
                                                   
                                                    variant="contained"
                                                    color="success"

                                                   
                                                    type="submit"
                                               

                                                >
                                                  
                                                    Submit
                                                </Button> */}

                                            </div>
                                            {/* <div className="col-xs-12 col-sm-6 col-md-4"></div> */}

                                        </div>
                                    </div> :
                                        <div class="form-outline mb-4" style={{ display: show ? "block" : "none" }}>

                                            <input type="text" class="form-control " placeholder={"Enter your OTP"}
                                                onChange={(e) => { setotp(e.target.value) }}></input>


                                            <div class="mb-3">
                                                <div class="mb-3"><div></div></div>
                                                <button type="button" class="btn btn-primary" onClick={ValidateOtp}>Verify</button>
                                                
                                            </div>
                                            <h4 style={{ color: "red" }}> <b>Not Verified</b></h4>
                                            {/* <div id="emailHelp" class="form-text">We'll  Share the Verification Code to<span style={{ color: "blue" }}>{values.mobielNumber}</span></div> */}
                                        </div>
                                    }



                                </div>
                            </div>
                        </div>
                        {/* email part statr */}

                        <div className="col-12 col-md-8 col-lg-6 col-xl-">

                            <div className="card shadow-2-strong " style={{ borderRadius: "1rem", padding: "27px" }}>

                                <div>
                                    <img src="images/otp.svg" style={{ width: "200px" }} alt="" />
                                </div>


                                <div className="card-body p-5 text-center">


                                    <div className="form-outline mb-4 row " style={{ display: !show1 ? "block" : "none" }}>
                                        <h3 className="">Verify email</h3>
                                        <input type="text" className="form-control " value={email}
                                            // onChange={(e) => {
                                            // 	setnumber(e.target.value)
                                            // }}
                                            hidden
                                            placeholder="email" />




                                        <div id="emailHelp" className="form-text">We'll  Share the Verification Code to <span style={{ color: "blue" }}>{email}</span></div>
                                        <br />
                                        <div className="mb-3">
                                            <button type="button" className="btn btn-primary" onClick={genrateotp}>Send OTP</button>
                                        </div>
                                        <h4 style={{ color: "red" }}> <b>Not Verified</b></h4>




                                    </div>

                                    {/* {user ? "Varified" : " Not Varified"} */}
                                    {Varified ? <div className Name="container">
                                        <div className Name="row">
                                            <div className Name="col-xs-12 col-sm-12 col-md-12">
                                                <h3 style={{ textAlign: "center", color: "green" }}>Email is verified</h3>
                                            </div>
                                            {/* <div className Name="col-xs-12 col-sm-6 col-md-4"></div> */}
                                            <div className Name="col-xs-12 col-sm-12 col-md-12">

                                                <br />
                                                {/* <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_atippmse.json" speed="1" style={{ width: "340px", height: "100px", }} autoplay></lottie-player> */}
                                                <br />
                                                {/* <Button
                                              
                                                    variant="contained"
                                                    color="success"

                                                  
                                                    type="submit"
                                                

                                                >
                                                   
                                                    Submit
                                                </Button> */}

                                            </div>
                                            {/* <div className Name="col-xs-12 col-sm-6 col-md-4"></div> */}

                                        </div>
                                    </div> :
                                        <div className="form-outline mb-4" style={{ display: show1 ? "block" : "none" }}>

                                            <input type="text" className="form-control " placeholder={"Enter your OTP"}
                                                onChange={(e) => { setUserotp(e.target.value) }}></input>


                                            <div className="mb-3">
                                                <div className="mb-3"><div></div></div>
                                                <button type="button" className="btn btn-primary" onClick={verify}>Verify</button>
                                            
                                            </div>
                                            <h4 style={{ color: "red" }}> <b>Not Verified</b></h4>
                                            {/* <div id="emailHelp" className ="form-text">We'll  Share the Verification Code to<span style={{ color: "blue" }}>{values.mobielNumber}</span></div> */}
                                        </div>
                                    }



                                </div>
                            </div>
                        </div>

                        {/* email part end  */}

                    </div>
                </div>
            </section>
            <div className ="text-center" >

                
                <Button
                    //   className Name={className es.button}
                    variant="contained"
                    color="success"
                    disabled ={Varified !== true || yes !== true}
                    // onClick={handleNext}
                    type="submit"
                // hidden={activeStep === steps.length - 1}

                >
                    {/* {activeStep === steps.length - 1 ? "Submit" : "Next"} */}
                    Submit
                </Button>
                <br/> <br/> <br/> <br/>

            </div>




        </div>
        // <div style={{ "marginTop": "200px" }}>
        // 	<center>

        // 		<div style={{ display: !show ? "block" : "none" }}>
        // 			<input value={mynumber}
        //              onChange={(e) => {
        // 			setnumber(e.target.value) }}
        // 				placeholder="phone number" 
        // 				alert
        // 				/>
        // 			<br /><br />
        // 			<div id="recaptcha-container"></div>
        // 			<button type="button" onClick={signin}>Send OTP</button>
        // 		</div>



        //         {yes?"yes":"no"}
        // 		<br/>
        // 		<br/>


        // 		<div style={{ display: show ? "block" : "none" }}>
        // 			<input type="text" placeholder={"Enter your OTP"}
        // 				onChange={(e) => { setotp(e.target.value) }}></input>
        // 			<br /><br />

        // 			<button type="button" onClick={ValidateOtp} >Verify</button>
        // 		</div>

        // 	</center>
        // </div>
    );
}
// Otp end

export default Login;