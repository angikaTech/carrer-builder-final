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
import Header from '../../../component/header/Header';
import Footer from '../../../component/header/Footer';
import checklist from '../../../component/images/bg/Checklist.jpg';
import { useNavigate } from "react-router-dom";

const PersonalForm = () => {


    const {
        register,
        getValues,
        formState: { errors },

    } = useFormContext();
    const values = getValues();

    console.log(errors);

    return (
        <div >
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-2"></div>

                    <div className="col-lg-8">
                        <h2 style={{ textAlign: "center" }}>
                            Verify Information Before Submitting Form
                        </h2>
                        <br />
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-sm-6 col-lg-10">
                                <table className="table table-striped">
                                    {/* <thead></thead> */}
                                    <tbody>
                                        <tr>
                                            <th >Name:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.name}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Course:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.course}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Program:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.program}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td><h5>{values.email}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Mobile Number:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.code}{values.mobielNumber}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Date of birth:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.dob}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Gender:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.gender}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>City name:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.cityName}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>State:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.state}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Country:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.country}</h5></td>
                                        </tr>
                                        <tr>
                                            <th>Document:</th>
                                            <td><h5 style={{ textTransform: "capitalize" }}>{values.file[0].name} </h5></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>

                    <div className="col-lg-2"></div>
                </div>
            </div>

            <br />




        </div>
    );
};
export default PersonalForm;