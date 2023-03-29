import { useFormContext } from "react-hook-form";
import Login from "../../../component/otpVarification/mobileOtp/OtpForm";
import FillBasicInfo from "../fillBaicInfo/FillBaicInfo";
import PersonalForm from "../PersonalForm/PersonalForm";
import checklist from '../../../component/images/bg/Checklist.jpg';


// wiard first page
const ContactForm = () => {
    const {
        register,
        getValues,
        formState: { errors },

    } = useFormContext();
    const values = getValues();

    console.log(errors);

    return (
        <>

            <h3 style={{ textAlign: "center" }}>Welcome, to the CareerBuilder Solutions Online Application Portal
            
            </h3>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4"></div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <img src={checklist} alt="" height="300px" style={{ align: "center" }} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4"></div>
                </div>
            </div>



            <h4 style={{ textAlign: "center" }}>Course name : <span style={{ color: "#F2184F" }}>{values.course}</span></h4>
            <br /><h4 style={{ textAlign: "center" }}>Program selected : <span style={{ color: "rgb(25, 118, 210)" }}>{values.program}</span></h4>
            {/* <Controller
                control={control}
                name=""
                render={({ field }) => (
                    <div style={{ textAlign: "center" }}>
                        <TextField
                            id="email"
                            label="Program selected"
                            variant="outlined"
                            placeholder="CSE (IOT &amp; Cyber Security including Block Chain Technology)"
                            // fullWidth
                            
                            margin="normal"
                            {...field}
                            disabled
                            InputLabelProps={{ shrink: true }}
                        />
                        <br />

                    </div>
                )}
            /> */}

            <br /><br /><br />
        </>
    );
};
function getSteps() {
    return [
        "Select Program",
        "Fill Basic Info",
        "Verify your data",
        "Submit form",
        
    ];
}
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

export {getStepContent,getSteps};