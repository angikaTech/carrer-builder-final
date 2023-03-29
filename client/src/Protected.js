import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "./component/otpVarification/mobileOtp/firebase";
import Dashboard from "./dashboard/mainpage/dashboard";


const Protected = ({ children }) => {

    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        setTimeout(() => setLoading(true), 3000);


    }, [])
    if (user) {





        return children;
    } else {

        setTimeout(() => setLoading(true), 1000000);

        return (
            <>
                {loading ? <center >
                    This Page is Protected
                </center> :
                    <center style={{ padding: "250px" }}>

                        <Spinner animation="border" variant="primary" />
                    </center>}
            </>
        );
    }






};
export default Protected;