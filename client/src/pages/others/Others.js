import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    MenuItem,


} from "@mui/material";

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,

} from "react-hook-form";
import axios from 'axios';
import Header from '../../component/header/Header';

import Footer from '../../component/header/Footer';
import checklist from '../../component/images/bg/Checklist.jpg';
import { useNavigate } from "react-router-dom";
import FillBasicInfo from "../wizardFormdata/fillBaicInfo/FillBaicInfo";
import PersonalForm from "../wizardFormdata/PersonalForm/PersonalForm";
import ThankuPage from "../wizardFormdata/thankuPage.js/ThankuPage";
import { getSteps } from "../wizardFormdata/wizarddata/WizaredData";
import Login from "../../component/otpVarification/mobileOtp/OtpForm";



const ContactForm = () => {
    const {
        control,
        formState: { errors },
        register,
    } = useFormContext();
    // const { register } = useFormContext();
    console.log(errors);

    return (
        <>

            <h3 style={{ textAlign: "center" }}>Welcome, to the CareerBuilder Solutions Online Application Portal</h3>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4"></div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <img src={checklist} alt="" height="300px" style={{ align: "center" }} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4"></div>
                </div>
            </div>
<div className="container">
    <div className="row">
    < div className="col-sm-2" style={{ padding: "20px" }}></div>
    < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="course"
                    rules={{ required: "Course field is required*." }}
                    render={({ field }) => (
                        <>
                            <TextField
                                id="course"
                                label="Course Name *"
                                variant="outlined"
                                placeholder="Enter Your Course Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.course)}
                                helperText={errors.course?.message}
                            />

                        </>
                    )}

                />
            </div>
             < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="program"
                    rules={{ required: "Program field is required*." }}
                    render={({ field }) => (
                        <>
                            <TextField
                                id="program"
                                label="Program name *"
                                variant="outlined"
                                placeholder="Enter Your Program name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.program)}
                                helperText={errors.program?.message}
                            />

                        </>
                    )}

                />
            </div>
    </div>
</div>
           

            {/* <h4 style={{ textAlign: "center" }}>Course name : <span style={{ color: "#F2184F" }}>Nursing</span></h4>
            <br /><h4 style={{ textAlign: "center" }}>Program selected : <span style={{ color: "rgb(25, 118, 210)" }}>B.Sc. Nursing</span></h4> */}
            

            <br /><br /><br />
        </>
    );
};



function getStepContent(step) {
    switch (step) {
        case 0:
            return <ContactForm />;

        case 1:
            return <FillBasicInfo />;
        case 2:
            return <PersonalForm />;
            case 3:
            return <Login />;

        default:
            return "unknown step";
    }
}

const Others = () => {
    const navigate = useNavigate();
    const register = useForm();
    const methods = useForm({


        defaultValues: {

            email: "",
            course: "",
            program: "",
            mobielNumber: "",
            dob: "",
            gender: "",
            cityName: "",
            state: "",
            file: "",
            country:"",
            code:"",

        },
        mode: "onChange",

    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);

    const steps = getSteps();
    const isStepOptional = (step) => {
        return step === 9 || step === 6;
    };
    const isStepFalied = () => {
        return Boolean(Object.keys(methods.formState.errors).length);
    };
    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = async (data) => {
        console.log(data);
        if (activeStep === steps.length - 1) {
            const formData = new FormData();
            const filename = Date.now() + data.file[0].name;
            formData.append("name", filename);
            formData.append("file", data.file[0]);
            data.document = filename;

            console.log(filename)
            try {

                await axios.post("https://api.careerbuildersolutions.org/upload", formData)

                console.log(formData)
            } catch (err) { console.log("no document") }


            try {
                const res2 = await axios.post("https://api.careerbuildersolutions.org/formconfmail", data).then((response) => {
                    console.log("succes mail is sent ")

                })
                const res1 = await axios.post("https://api.careerbuildersolutions.org/sendmail", data).then((response) => {
                    console.log("mail is sent ")

                })
                const res = await axios.post("https://api.careerbuildersolutions.org/studentreg", data).then((response) => {
                    console.log("form is submitted ")


                })
                setActiveStep(activeStep + 1);

            } catch (err) { alert("not submitted") }

        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // const handleSkip = () => {
    //   if (!isStepSkipped(activeStep)) {
    //     setSkippedSteps([...skippedSteps, activeStep]);
    //   }
    //   setActiveStep(activeStep + 1);
    // };

    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
        <>
            <Header />
            <br /> <br /> <br /> <br /> <br /> <br />


            <div className='container'>
                <Stepper alternativeLabel activeStep={activeStep}  >
                    {steps.map((step, index) => {
                        const labelProps = {};
                        const stepProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography

                                    variant="caption"
                                    align="center"
                                    style={{ display: "block" }}
                                >
                                    optional
                                </Typography>
                            );
                        }
                        if (isStepFalied() && activeStep == index) {
                            labelProps.error = true;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step  {...stepProps} key={index}>
                                <StepLabel {...labelProps} >{step}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <br /><br /><br />
                {activeStep === steps.length ? (
                   <>

                   <ThankuPage/>
               </>
                ) : (
                    <>
                        {/* <div className="form-register content"   >
                        <div className=" content" > */}
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(handleNext)} encType="multipart/form-data">
                                {getStepContent(activeStep)}




                                <Button
                                    //   className={classes.button}
                                    // disabled={activeStep === 0}
                                    hidden={activeStep === 0}

                                    onClick={handleBack}
                                >
                                    back
                                </Button>
                                <Button

                                    hidden={activeStep != 0}
                                    onClick={() => navigate("/")}
                                >
                                    back
                                </Button>

                                <Button
                                    //   className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    // onClick={handleNext}
                                    type="submit"
                                    hidden={activeStep === steps.length - 1}

                                >
                                    {/* {activeStep === steps.length - 1 ? "Submit" : "Next"} */}
                                    Next
                                </Button>
                            </form>
                        </FormProvider>
                        {/* </div></div> */}
                    </>
                )}
            </div>
            <br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default Others;