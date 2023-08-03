import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    MenuItem,
    createTheme,
    ThemeProvider,
    Select,


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
import MuiPhoneNumber from 'material-ui-phone-number';


import {useDropzone} from 'react-dropzone';

const FillBasicInfo = () => {
    const {
        control,
        formState: { errors },
        register,
        getValues,
    } = useFormContext();
    // const { register } = useFormContext();
    const values = getValues();
    console.log(errors);

    // if ((getValues.file[0].size > 1000)) {
    // console.log("Image File Size is Greater than 2MB.") ;
        
    // }  
  
    const [file, setFile] = useState(null);

    const fileChangedHandler = event => {
      let file = event.target.files[0];
      let reader = new FileReader();
  
      console.log(file);
      reader.onload = function(e) {
        setFile(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
   

     if (file.size > 20*1024*1024) {
       window.alert("Please upload a file smaller than 20 MB");
       event.target.value = "";
       return false;
     }
// var uploadField = document.getElementById("file");

// uploadField.onchange = function() {
//     if(this.files[0].size > 20*1024*1024){
//        alert("File is too big! accept upto 20 MB only");
//        this.value = "";
//     };
// };
    };
    return (

        <div className="row" >


            <h4 style={{ textAlign: "center" }}> <span style={{ color: "#820001", }}><b>{values.program}</b></span></h4>

            < div className="col-sm-4" style={{ padding: "20px" }}>
          
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: "Name field is required *." }}
                    render={({ field }) => (

                        <TextField

                            // font size of input text 
                            inputProps={{
                                pattern: "[a-zA-Z ]{2,}$",
                                title: "Accept only alphabets",
                                // style: { fontSize: 20 }
                            }}

                            // font size of input label
                            // InputLabelProps={{ style: { fontSize: 20 } }} 


                            id="first-name"
                            label="Name of the Applicant * "
                            variant="outlined"
                            placeholder="Enter Your  Name"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.name)}
                            helperText={errors.name?.message}
                        // FormHelperTextProps={{style:{fontSize:20}}}
                        />
                    )}
                />
            </div>


            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: "Email is required*." }}
                    render={({ field }) => (
                        <TextField

                            inputProps={{
                                pattern: "[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,50}[\.][a-z]{2,15}",
                                title: "Email should be in format abc@gmail.com ",
                            }}
                            id="email"
                            label="Email *"
                            variant="outlined"
                            placeholder="Enter Your email"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.email)}
                            helperText={errors.email?.message}
                        // type="email"
                        />
                    )}
                />
            </div>

            < div className="col-sm-3 col-xl-4" style={{ padding: "20px" }}>
                < div className="row" >
                    < div className="col-sm-3 col-xl-5" >
                        <Controller
                            control={control}
                            name="code"
                            rules={{ required: "Country code required*." }}
                            render={({ field }) => (
                                <TextField
                               
                                    id="code"
                                    label="Code"
                                    variant="outlined"
                                    placeholder="Enter Your country code "
                                    fullWidth
                                    margin="normal"
                                    {...field}
                                    error={Boolean(errors?.code)}
                                    helperText={errors.code?.message}
                                    select

                                >
                                    <MenuItem value="+93">Afghanistan +93</MenuItem>
                                    <MenuItem value="+358">Aland Islands +358</MenuItem>
                                    <MenuItem value="+355">Albania +355</MenuItem>
                                    <MenuItem value="+213">Algeria +213</MenuItem>
                                    <MenuItem value="+1684">American Samoa +1684</MenuItem>
                                    <MenuItem value="+376">Andorra +376</MenuItem>
                                    <MenuItem value="+244">Angola +244</MenuItem>
                                    <MenuItem value="+1264">Anguilla +1264</MenuItem>
                                    <MenuItem value="+672">Antarctica +672</MenuItem>
                                    <MenuItem value="+1268">Antigua and Barbuda +1268</MenuItem>
                                    <MenuItem value="+54">Argentina +54</MenuItem>
                                    <MenuItem value="+374">Armenia +374</MenuItem>
                                    <MenuItem value="+297">Aruba +297</MenuItem>
                                    <MenuItem value="+61">Australia +61</MenuItem>
                                    <MenuItem value="+43">Austria +43</MenuItem>
                                    <MenuItem value="+994">Azerbaijan +994</MenuItem>
                                    <MenuItem value="+1242">Bahamas +1242</MenuItem>
                                    <MenuItem value="+973">Bahrain +973</MenuItem>
                                    <MenuItem value="+880">Bangladesh +880</MenuItem>
                                    <MenuItem value="+1246">Barbados +1246</MenuItem>
                                    <MenuItem value="+375">Belarus +375</MenuItem>
                                    <MenuItem value="+32">Belgium +32</MenuItem>
                                    <MenuItem value="+501">Belize +501</MenuItem>
                                    <MenuItem value="+229">Benin +229</MenuItem>
                                    <MenuItem value="+1441">Bermuda +1441</MenuItem>
                                    <MenuItem value="+975">Bhutan +975</MenuItem>
                                    <MenuItem value="+591">Bolivia +591</MenuItem>
                                    <MenuItem value="+599">Bonaire, Sint Eustatius and Saba +599</MenuItem>
                                    <MenuItem value="+387">Bosnia and Herzegovina +387</MenuItem>
                                    <MenuItem value="+267">Botswana +267</MenuItem>
                                    <MenuItem value="+55">Bouvet Island +55</MenuItem>
                                    <MenuItem value="+55">Brazil +55</MenuItem>
                                    <MenuItem value="+246">British Indian Ocean Territory +246</MenuItem>
                                    <MenuItem value="+673">Brunei Darussalam +673</MenuItem>
                                    <MenuItem value="+359">Bulgaria +359</MenuItem>
                                    <MenuItem value="+226">Burkina Faso +226</MenuItem>
                                    <MenuItem value="+257">Burundi +257</MenuItem>
                                    <MenuItem value="+855">Cambodia +855</MenuItem>
                                    <MenuItem value="+237">Cameroon +237</MenuItem>
                                    <MenuItem value="+1">Canada +1</MenuItem>
                                    <MenuItem value="+238">Cape Verde +238</MenuItem>
                                    <MenuItem value="+1345">Cayman Islands +1345</MenuItem>
                                    <MenuItem value="+236">Central African Republic +236</MenuItem>
                                    <MenuItem value="+235">Chad +235</MenuItem>
                                    <MenuItem value="+56">Chile +56</MenuItem>
                                    <MenuItem value="+86">China +86</MenuItem>
                                    <MenuItem value="+61">Christmas Island +61</MenuItem>
                                    <MenuItem value="+672">Cocos (Keeling) Islands +672</MenuItem>
                                    <MenuItem value="+57">Colombia +57</MenuItem>
                                    <MenuItem value="+269">Comoros +269</MenuItem>
                                    <MenuItem value="+242">Congo +242</MenuItem>
                                    <MenuItem value="+242">Congo, Democratic Republic of the Congo +242</MenuItem>
                                    <MenuItem value="+682">Cook Islands +682</MenuItem>
                                    <MenuItem value="+506">Costa Rica +506</MenuItem>
                                    <MenuItem value="+225">Cote D'Ivoire +225</MenuItem>
                                    <MenuItem value="+385">Croatia +385</MenuItem>
                                    <MenuItem value="+53">Cuba +53</MenuItem>
                                    <MenuItem value="+599">Curacao +599</MenuItem>
                                    <MenuItem value="+357">Cyprus +357</MenuItem>
                                    <MenuItem value="+420">Czech Republic +420</MenuItem>
                                    <MenuItem value="+45">Denmark +45</MenuItem>
                                    <MenuItem value="+253">Djibouti +253</MenuItem>
                                    <MenuItem value="+1767">Dominica +1767</MenuItem>
                                    <MenuItem value="+1809">Dominican Republic +1809</MenuItem>
                                    <MenuItem value="+593">Ecuador +593</MenuItem>
                                    <MenuItem value="+20">Egypt +20</MenuItem>
                                    <MenuItem value="+503">El Salvador +503</MenuItem>
                                    <MenuItem value="+240">Equatorial Guinea +240</MenuItem>
                                    <MenuItem value="+291">Eritrea +291</MenuItem>
                                    <MenuItem value="+372">Estonia +372</MenuItem>
                                    <MenuItem value="+251">Ethiopia +251</MenuItem>
                                    <MenuItem value="+500">Falkland Islands (Malvinas) +500</MenuItem>
                                    <MenuItem value="+298">Faroe Islands +298</MenuItem>
                                    <MenuItem value="+679">Fiji +679</MenuItem>
                                    <MenuItem value="+358">Finland +358</MenuItem>
                                    <MenuItem value="+33">France +33</MenuItem>
                                    <MenuItem value="+594">French Guiana +594</MenuItem>
                                    <MenuItem value="+689">French Polynesia +689</MenuItem>
                                    <MenuItem value="+262">French Southern Territories +262</MenuItem>
                                    <MenuItem value="+241">Gabon +241</MenuItem>
                                    <MenuItem value="+220">Gambia +220</MenuItem>
                                    <MenuItem value="+995">Georgia +995</MenuItem>
                                    <MenuItem value="+49">Germany +49</MenuItem>
                                    <MenuItem value="+233">Ghana +233</MenuItem>
                                    <MenuItem value="+350">Gibraltar +350</MenuItem>
                                    <MenuItem value="+30">Greece +30</MenuItem>
                                    <MenuItem value="+299">Greenland +299</MenuItem>
                                    <MenuItem value="+1473">Grenada +1473</MenuItem>
                                    <MenuItem value="+590">Guadeloupe +590</MenuItem>
                                    <MenuItem value="+1671">Guam +1671</MenuItem>
                                    <MenuItem value="+502">Guatemala +502</MenuItem>
                                    <MenuItem value="+44">Guernsey +44</MenuItem>
                                    <MenuItem value="+224">Guinea +224</MenuItem>
                                    <MenuItem value="+245">Guinea-Bissau +245</MenuItem>
                                    <MenuItem value="+592">Guyana +592</MenuItem>
                                    <MenuItem value="+509">Haiti +509</MenuItem>
                                    <MenuItem value="+0">Heard Island and Mcdonald Islands +0</MenuItem>
                                    <MenuItem value="+39">Holy See (Vatican City State) +39</MenuItem>
                                    <MenuItem value="+504">Honduras +504</MenuItem>
                                    <MenuItem value="+852">Hong Kong +852</MenuItem>
                                    <MenuItem value="+36">Hungary +36</MenuItem>
                                    <MenuItem value="+354">Iceland +354</MenuItem>
                                    <MenuItem value="+91">India +91</MenuItem>
                                    <MenuItem value="+62">Indonesia +62</MenuItem>
                                    <MenuItem value="+98">Iran, Islamic Republic of +98</MenuItem>
                                    <MenuItem value="+964">Iraq +964</MenuItem>
                                    <MenuItem value="+353">Ireland +353</MenuItem>
                                    <MenuItem value="+44">Isle of Man +44</MenuItem>
                                    <MenuItem value="+972">Israel +972</MenuItem>
                                    <MenuItem value="+39">Italy +39</MenuItem>
                                    <MenuItem value="+1876">Jamaica +1876</MenuItem>
                                    <MenuItem value="+81">Japan +81</MenuItem>
                                    <MenuItem value="+44">Jersey +44</MenuItem>
                                    <MenuItem value="+962">Jordan +962</MenuItem>
                                    <MenuItem value="+7">Kazakhstan +7</MenuItem>
                                    <MenuItem value="+254">Kenya +254</MenuItem>
                                    <MenuItem value="+686">Kiribati +686</MenuItem>
                                    <MenuItem value="+850">Korea, Democratic People's Republic of +850</MenuItem>
                                    <MenuItem value="+82">Korea, Republic of +82</MenuItem>
                                    <MenuItem value="+381">Kosovo +381</MenuItem>
                                    <MenuItem value="+965">Kuwait +965</MenuItem>
                                    <MenuItem value="+996">Kyrgyzstan +996</MenuItem>
                                    <MenuItem value="+856">Lao People's Democratic Republic +856</MenuItem>
                                    <MenuItem value="+371">Latvia +371</MenuItem>
                                    <MenuItem value="+961">Lebanon +961</MenuItem>
                                    <MenuItem value="+266">Lesotho +266</MenuItem>
                                    <MenuItem value="+231">Liberia +231</MenuItem>
                                    <MenuItem value="+218">Libyan Arab Jamahiriya +218</MenuItem>
                                    <MenuItem value="+423">Liechtenstein +423</MenuItem>
                                    <MenuItem value="+370">Lithuania +370</MenuItem>
                                    <MenuItem value="+352">Luxembourg +352</MenuItem>
                                    <MenuItem value="+853">Macao +853</MenuItem>
                                    <MenuItem value="+389">Macedonia, the Former Yugoslav Republic of +389</MenuItem>
                                    <MenuItem value="+261">Madagascar +261</MenuItem>
                                    <MenuItem value="+265">Malawi +265</MenuItem>
                                    <MenuItem value="+60">Malaysia +60</MenuItem>
                                    <MenuItem value="+960">Maldives +960</MenuItem>
                                    <MenuItem value="+223">Mali +223</MenuItem>
                                    <MenuItem value="+356">Malta +356</MenuItem>
                                    <MenuItem value="+692">Marshall Islands +692</MenuItem>
                                    <MenuItem value="+596">Martinique +596</MenuItem>
                                    <MenuItem value="+222">Mauritania +222</MenuItem>
                                    <MenuItem value="+230">Mauritius +230</MenuItem>
                                    <MenuItem value="+269">Mayotte +269</MenuItem>
                                    <MenuItem value="+52">Mexico +52</MenuItem>
                                    <MenuItem value="+691">Micronesia, Federated States of +691</MenuItem>
                                    <MenuItem value="+373">Moldova, Republic of +373</MenuItem>
                                    <MenuItem value="+377">Monaco +377</MenuItem>
                                    <MenuItem value="+976">Mongolia +976</MenuItem>
                                    <MenuItem value="+382">Montenegro +382</MenuItem>
                                    <MenuItem value="+1664">Montserrat +1664</MenuItem>
                                    <MenuItem value="+212">Morocco +212</MenuItem>
                                    <MenuItem value="+258">Mozambique +258</MenuItem>
                                    <MenuItem value="+95">Myanmar +95</MenuItem>
                                    <MenuItem value="+264">Namibia +264</MenuItem>
                                    <MenuItem value="+674">Nauru +674</MenuItem>
                                    <MenuItem value="+977">Nepal +977</MenuItem>
                                    <MenuItem value="+31">Netherlands +31</MenuItem>
                                    <MenuItem value="+599">Netherlands Antilles +599</MenuItem>
                                    <MenuItem value="+687">New Caledonia +687</MenuItem>
                                    <MenuItem value="+64">New Zealand +64</MenuItem>
                                    <MenuItem value="+505">Nicaragua +505</MenuItem>
                                    <MenuItem value="+227">Niger +227</MenuItem>
                                    <MenuItem value="+234">Nigeria +234</MenuItem>
                                    <MenuItem value="+683">Niue +683</MenuItem>
                                    <MenuItem value="+672">Norfolk Island +672</MenuItem>
                                    <MenuItem value="+1670">Northern Mariana Islands +1670</MenuItem>
                                    <MenuItem value="+47">Norway +47</MenuItem>
                                    <MenuItem value="+968">Oman +968</MenuItem>
                                    <MenuItem value="+92">Pakistan +92</MenuItem>
                                    <MenuItem value="+680">Palau +680</MenuItem>
                                    <MenuItem value="+970">Palestinian Territory, Occupied +970</MenuItem>
                                    <MenuItem value="+507">Panama +507</MenuItem>
                                    <MenuItem value="+675">Papua New Guinea +675</MenuItem>
                                    <MenuItem value="+595">Paraguay +595</MenuItem>
                                    <MenuItem value="+51">Peru +51</MenuItem>
                                    <MenuItem value="+63">Philippines +63</MenuItem>
                                    <MenuItem value="+64">Pitcairn +64</MenuItem>
                                    <MenuItem value="+48">Poland +48</MenuItem>
                                    <MenuItem value="+351">Portugal +351</MenuItem>
                                    <MenuItem value="+1787">Puerto Rico +1787</MenuItem>
                                    <MenuItem value="+974">Qatar +974</MenuItem>
                                    <MenuItem value="+262">Reunion +262</MenuItem>
                                    <MenuItem value="+40">Romania +40</MenuItem>
                                    <MenuItem value="+70">Russian Federation +70</MenuItem>
                                    <MenuItem value="+250">Rwanda +250</MenuItem>
                                    <MenuItem value="+590">Saint Barthelemy +590</MenuItem>
                                    <MenuItem value="+290">Saint Helena +290</MenuItem>
                                    <MenuItem value="+1869">Saint Kitts and Nevis +1869</MenuItem>
                                    <MenuItem value="+1758">Saint Lucia +1758</MenuItem>
                                    <MenuItem value="+590">Saint Martin +590</MenuItem>
                                    <MenuItem value="+508">Saint Pierre and Miquelon +508</MenuItem>
                                    <MenuItem value="+1784">Saint Vincent and the Grenadines +1784</MenuItem>
                                    <MenuItem value="+684">Samoa +684</MenuItem>
                                    <MenuItem value="+378">San Marino +378</MenuItem>
                                    <MenuItem value="+239">Sao Tome and Principe +239</MenuItem>
                                    <MenuItem value="+966">Saudi Arabia +966</MenuItem>
                                    <MenuItem value="+221">Senegal +221</MenuItem>
                                    <MenuItem value="+381">Serbia +381</MenuItem>
                                    <MenuItem value="+381">Serbia and Montenegro +381</MenuItem>
                                    <MenuItem value="+248">Seychelles +248</MenuItem>
                                    <MenuItem value="+232">Sierra Leone +232</MenuItem>
                                    <MenuItem value="+65">Singapore +65</MenuItem>
                                    <MenuItem value="+1">Sint Maarten +1</MenuItem>
                                    <MenuItem value="+421">Slovakia +421</MenuItem>
                                    <MenuItem value="+386">Slovenia +386</MenuItem>
                                    <MenuItem value="+677">Solomon Islands +677</MenuItem>
                                    <MenuItem value="+252">Somalia +252</MenuItem>
                                    <MenuItem value="+27">South Africa +27</MenuItem>
                                    <MenuItem value="+500">South Georgia and the South Sandwich Islands +500</MenuItem>
                                    <MenuItem value="+211">South Sudan +211</MenuItem>
                                    <MenuItem value="+34">Spain +34</MenuItem>
                                    <MenuItem value="+94">Sri Lanka +94</MenuItem>
                                    <MenuItem value="+249">Sudan +249</MenuItem>
                                    <MenuItem value="+597">Suriname +597</MenuItem>
                                    <MenuItem value="+47">Svalbard and Jan Mayen +47</MenuItem>
                                    <MenuItem value="+268">Swaziland +268</MenuItem>
                                    <MenuItem value="+46">Sweden +46</MenuItem>
                                    <MenuItem value="+41">Switzerland +41</MenuItem>
                                    <MenuItem value="+963">Syrian Arab Republic +963</MenuItem>
                                    <MenuItem value="+886">Taiwan, Province of China +886</MenuItem>
                                    <MenuItem value="+992">Tajikistan +992</MenuItem>
                                    <MenuItem value="+255">Tanzania, United Republic of +255</MenuItem>
                                    <MenuItem value="+66">Thailand +66</MenuItem>
                                    <MenuItem value="+670">Timor-Leste +670</MenuItem>
                                    <MenuItem value="+228">Togo +228</MenuItem>
                                    <MenuItem value="+690">Tokelau +690</MenuItem>
                                    <MenuItem value="+676">Tonga +676</MenuItem>
                                    <MenuItem value="+1868">Trinidad and Tobago +1868</MenuItem>
                                    <MenuItem value="+216">Tunisia +216</MenuItem>
                                    <MenuItem value="+90">Turkey +90</MenuItem>
                                    <MenuItem value="+7370">Turkmenistan +7370</MenuItem>
                                    <MenuItem value="+1649">Turks and Caicos Islands +1649</MenuItem>
                                    <MenuItem value="+688">Tuvalu +688</MenuItem>
                                    <MenuItem value="+256">Uganda +256</MenuItem>
                                    <MenuItem value="+380">Ukraine +380</MenuItem>
                                    <MenuItem value="+971">United Arab Emirates +971</MenuItem>
                                    <MenuItem value="+44">United Kingdom +44</MenuItem>
                                    <MenuItem value="+1">United States +1</MenuItem>
                                    <MenuItem value="+1">United States Minor Outlying Islands +1</MenuItem>
                                    <MenuItem value="+598">Uruguay +598</MenuItem>
                                    <MenuItem value="+998">Uzbekistan +998</MenuItem>
                                    <MenuItem value="+678">Vanuatu +678</MenuItem>
                                    <MenuItem value="+58">Venezuela +58</MenuItem>
                                    <MenuItem value="+84">Viet Nam +84</MenuItem>
                                    <MenuItem value="+1284">Virgin Islands, British +1284</MenuItem>
                                    <MenuItem value="+1340">Virgin Islands, U.s. +1340</MenuItem>
                                    <MenuItem value="+681">Wallis and Futuna +681</MenuItem>
                                    <MenuItem value="+212">Western Sahara +212</MenuItem>
                                    <MenuItem value="+967">Yemen +967</MenuItem>
                                    <MenuItem value="+260">Zambia +260</MenuItem>
                                    <MenuItem value="+263">Zimbabwe +263</MenuItem>
                                    {/* <MenuItem value="+91">+91</MenuItem>
                            <MenuItem value="+977">+977</MenuItem> */}



                                </TextField>

                            )}
                        />
                    </div>
                    < div className="col-sm-12 col-xl-7"
                    // style={{  paddingLeft: "0px" }}
                    >
                        <Controller
                            control={control}
                            name="mobielNumber"
                            rules={{ required: " Mobile number required*." }}
                            render={({ field }) => (
                                <TextField

                                    // sx={{ width: 250 }}
                                    inputProps={{ pattern: "[0-9]{10}", title: "Accept only 10 digit numerical value" }}
                                    id="mobielNumber"
                                    label="Mobile Number *"
                                    variant="outlined"
                                    placeholder="Enter mobile number"
                                    fullWidth
                                    margin="normal"
                                    {...field}

                                    error={Boolean(errors?.mobielNumber)}
                                    helperText={errors.mobielNumber?.message}
                                />

                            )}

                        />
                    </div>
                </div>

            </div>
            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="dob"
                    rules={{ required: "Date of birth required*." }}
                    render={({ field }) => (
                        <TextField
                            inputProps={{ max: '2014-12-31', min: '1980-01-1' }}

                            id="dob"
                            label="Date of birth *"
                            variant="outlined"
                            placeholder="Enter Your Date of birth"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.dob)}
                            helperText={errors.dob?.message}
                            type="date"
                            InputLabelProps={{ shrink: true }}
                        />

                    )}
                />
            </div>


            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="gender"
                    rules={{ required: "Gender required*." }}
                    render={({ field }) => (
                        <TextField
                            id="gender"
                            label="Gender *"
                            variant="outlined"
                            // placeholder="Enter Your State name"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.gender)}
                            helperText={errors.gender?.message}
                            select
                        >

                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>


                        </TextField>

                    )}
                />
            </div>
            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="country"
                    rules={{ required: "Country name required*." }}
                    render={({ field }) => (
                        <>
                            <TextField

                                id="Country"
                                label="Country *"
                                variant="outlined"
                                placeholder="Enter Your Country Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.country)}
                                helperText={errors.country?.message}
                                select
                            >
                                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                <MenuItem value="Aland Islands">Aland Islands</MenuItem>
                                <MenuItem value="Albania">Albania</MenuItem>
                                <MenuItem value="Algeria">Algeria</MenuItem>
                                <MenuItem value="American Samoa">American Samoa</MenuItem>
                                <MenuItem value="Andorra">Andorra</MenuItem>
                                <MenuItem value="Angola">Angola</MenuItem>
                                <MenuItem value="Anguilla">Anguilla</MenuItem>
                                <MenuItem value="Antarctica">Antarctica</MenuItem>
                                <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
                                <MenuItem value="Argentina">Argentina</MenuItem>
                                <MenuItem value="Armenia">Armenia</MenuItem>
                                <MenuItem value="Aruba">Aruba</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="Austria">Austria</MenuItem>
                                <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                                <MenuItem value="Bahamas">Bahamas</MenuItem>
                                <MenuItem value="Bahrain">Bahrain</MenuItem>
                                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                <MenuItem value="Barbados">Barbados</MenuItem>
                                <MenuItem value="Belarus">Belarus</MenuItem>
                                <MenuItem value="Belgium">Belgium</MenuItem>
                                <MenuItem value="Belize">Belize</MenuItem>
                                <MenuItem value="Benin">Benin</MenuItem>
                                <MenuItem value="Bermuda">Bermuda</MenuItem>
                                <MenuItem value="Bhutan">Bhutan</MenuItem>
                                <MenuItem value="Bolivia">Bolivia</MenuItem>
                                <MenuItem value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</MenuItem>
                                <MenuItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</MenuItem>
                                <MenuItem value="Botswana">Botswana</MenuItem>
                                <MenuItem value="Bouvet Island">Bouvet Island</MenuItem>
                                <MenuItem value="Brazil">Brazil</MenuItem>
                                <MenuItem value="British Indian Ocean Territory">British Indian Ocean Territory</MenuItem>
                                <MenuItem value="Brunei Darussalam">Brunei Darussalam</MenuItem>
                                <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                                <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                                <MenuItem value="Burundi">Burundi</MenuItem>
                                <MenuItem value="Cambodia">Cambodia</MenuItem>
                                <MenuItem value="Cameroon">Cameroon</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                                <MenuItem value="Cape Verde">Cape Verde</MenuItem>
                                <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
                                <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                                <MenuItem value="Chad">Chad</MenuItem>
                                <MenuItem value="Chile">Chile</MenuItem>
                                <MenuItem value="China">China</MenuItem>
                                <MenuItem value="Christmas Island">Christmas Island</MenuItem>
                                <MenuItem value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</MenuItem>
                                <MenuItem value="Colombia">Colombia</MenuItem>
                                <MenuItem value="Comoros">Comoros</MenuItem>
                                <MenuItem value="Congo">Congo</MenuItem>
                                <MenuItem value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</MenuItem>
                                <MenuItem value="Cook Islands">Cook Islands</MenuItem>
                                <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                                <MenuItem value="Cote D'Ivoire">Cote D'Ivoire</MenuItem>
                                <MenuItem value="Croatia">Croatia</MenuItem>
                                <MenuItem value="Cuba">Cuba</MenuItem>
                                <MenuItem value="Curacao">Curacao</MenuItem>
                                <MenuItem value="Cyprus">Cyprus</MenuItem>
                                <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                                <MenuItem value="Denmark">Denmark</MenuItem>
                                <MenuItem value="Djibouti">Djibouti</MenuItem>
                                <MenuItem value="Dominica">Dominica</MenuItem>
                                <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                                <MenuItem value="Ecuador">Ecuador</MenuItem>
                                <MenuItem value="Egypt">Egypt</MenuItem>
                                <MenuItem value="El Salvador">El Salvador</MenuItem>
                                <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                                <MenuItem value="Eritrea">Eritrea</MenuItem>
                                <MenuItem value="Estonia">Estonia</MenuItem>
                                <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                                <MenuItem value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</MenuItem>
                                <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
                                <MenuItem value="Fiji">Fiji</MenuItem>
                                <MenuItem value="Finland">Finland</MenuItem>
                                <MenuItem value="France">France</MenuItem>
                                <MenuItem value="French Guiana">French Guiana</MenuItem>
                                <MenuItem value="French Polynesia">French Polynesia</MenuItem>
                                <MenuItem value="French Southern Territories">French Southern Territories</MenuItem>
                                <MenuItem value="Gabon">Gabon</MenuItem>
                                <MenuItem value="Gambia">Gambia</MenuItem>
                                <MenuItem value="Georgia">Georgia</MenuItem>
                                <MenuItem value="Germany">Germany</MenuItem>
                                <MenuItem value="Ghana">Ghana</MenuItem>
                                <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                                <MenuItem value="Greece">Greece</MenuItem>
                                <MenuItem value="Greenland">Greenland</MenuItem>
                                <MenuItem value="Grenada">Grenada</MenuItem>
                                <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
                                <MenuItem value="Guam">Guam</MenuItem>
                                <MenuItem value="Guatemala">Guatemala</MenuItem>
                                <MenuItem value="Guernsey">Guernsey</MenuItem>
                                <MenuItem value="Guinea">Guinea</MenuItem>
                                <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
                                <MenuItem value="Guyana">Guyana</MenuItem>
                                <MenuItem value="Haiti">Haiti</MenuItem>
                                <MenuItem value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</MenuItem>
                                <MenuItem value="Holy See (Vatican City State)">Holy See (Vatican City State)</MenuItem>
                                <MenuItem value="Honduras">Honduras</MenuItem>
                                <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                                <MenuItem value="Hungary">Hungary</MenuItem>
                                <MenuItem value="Iceland">Iceland</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="Indonesia">Indonesia</MenuItem>
                                <MenuItem value="Iran, Islamic Republic of">Iran, Islamic Republic of</MenuItem>
                                <MenuItem value="Iraq">Iraq</MenuItem>
                                <MenuItem value="Ireland">Ireland</MenuItem>
                                <MenuItem value="Isle of Man">Isle of Man</MenuItem>
                                <MenuItem value="Israel">Israel</MenuItem>
                                <MenuItem value="Italy">Italy</MenuItem>
                                <MenuItem value="Jamaica">Jamaica</MenuItem>
                                <MenuItem value="Japan">Japan</MenuItem>
                                <MenuItem value="Jersey">Jersey</MenuItem>
                                <MenuItem value="Jordan">Jordan</MenuItem>
                                <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                                <MenuItem value="Kenya">Kenya</MenuItem>
                                <MenuItem value="Kiribati">Kiribati</MenuItem>
                                <MenuItem value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</MenuItem>
                                <MenuItem value="Korea, Republic of">Korea, Republic of</MenuItem>
                                <MenuItem value="Kosovo">Kosovo</MenuItem>
                                <MenuItem value="Kuwait">Kuwait</MenuItem>
                                <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                                <MenuItem value="Lao People's Democratic Republic">Lao People's Democratic Republic</MenuItem>
                                <MenuItem value="Latvia">Latvia</MenuItem>
                                <MenuItem value="Lebanon">Lebanon</MenuItem>
                                <MenuItem value="Lesotho">Lesotho</MenuItem>
                                <MenuItem value="Liberia">Liberia</MenuItem>
                                <MenuItem value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</MenuItem>
                                <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                                <MenuItem value="Lithuania">Lithuania</MenuItem>
                                <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                                <MenuItem value="Macao">Macao</MenuItem>
                                <MenuItem value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</MenuItem>
                                <MenuItem value="Madagascar">Madagascar</MenuItem>
                                <MenuItem value="Malawi">Malawi</MenuItem>
                                <MenuItem value="Malaysia">Malaysia</MenuItem>
                                <MenuItem value="Maldives">Maldives</MenuItem>
                                <MenuItem value="Mali">Mali</MenuItem>
                                <MenuItem value="Malta">Malta</MenuItem>
                                <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                                <MenuItem value="Martinique">Martinique</MenuItem>
                                <MenuItem value="Mauritania">Mauritania</MenuItem>
                                <MenuItem value="Mauritius">Mauritius</MenuItem>
                                <MenuItem value="Mayotte">Mayotte</MenuItem>
                                <MenuItem value="Mexico">Mexico</MenuItem>
                                <MenuItem value="Micronesia, Federated States of">Micronesia, Federated States of</MenuItem>
                                <MenuItem value="Moldova, Republic of">Moldova, Republic of</MenuItem>
                                <MenuItem value="Monaco">Monaco</MenuItem>
                                <MenuItem value="Mongolia">Mongolia</MenuItem>
                                <MenuItem value="Montenegro">Montenegro</MenuItem>
                                <MenuItem value="Montserrat">Montserrat</MenuItem>
                                <MenuItem value="Morocco">Morocco</MenuItem>
                                <MenuItem value="Mozambique">Mozambique</MenuItem>
                                <MenuItem value="Myanmar">Myanmar</MenuItem>
                                <MenuItem value="Namibia">Namibia</MenuItem>
                                <MenuItem value="Nauru">Nauru</MenuItem>
                                <MenuItem value="Nepal">Nepal</MenuItem>
                                <MenuItem value="Netherlands">Netherlands</MenuItem>
                                <MenuItem value="Netherlands Antilles">Netherlands Antilles</MenuItem>
                                <MenuItem value="New Caledonia">New Caledonia</MenuItem>
                                <MenuItem value="New Zealand">New Zealand</MenuItem>
                                <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                                <MenuItem value="Niger">Niger</MenuItem>
                                <MenuItem value="Nigeria">Nigeria</MenuItem>
                                <MenuItem value="Niue">Niue</MenuItem>
                                <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
                                <MenuItem value="Northern Mariana Islands">Northern Mariana Islands</MenuItem>
                                <MenuItem value="Norway">Norway</MenuItem>
                                <MenuItem value="Oman">Oman</MenuItem>
                                <MenuItem value="Pakistan">Pakistan</MenuItem>
                                <MenuItem value="Palau">Palau</MenuItem>
                                <MenuItem value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</MenuItem>
                                <MenuItem value="Panama">Panama</MenuItem>
                                <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                                <MenuItem value="Paraguay">Paraguay</MenuItem>
                                <MenuItem value="Peru">Peru</MenuItem>
                                <MenuItem value="Philippines">Philippines</MenuItem>
                                <MenuItem value="Pitcairn">Pitcairn</MenuItem>
                                <MenuItem value="Poland">Poland</MenuItem>
                                <MenuItem value="Portugal">Portugal</MenuItem>
                                <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                                <MenuItem value="Qatar">Qatar</MenuItem>
                                <MenuItem value="Reunion">Reunion</MenuItem>
                                <MenuItem value="Romania">Romania</MenuItem>
                                <MenuItem value="Russian Federation">Russian Federation</MenuItem>
                                <MenuItem value="Rwanda">Rwanda</MenuItem>
                                <MenuItem value="Saint Barthelemy">Saint Barthelemy</MenuItem>
                                <MenuItem value="Saint Helena">Saint Helena</MenuItem>
                                <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>
                                <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
                                <MenuItem value="Saint Martin">Saint Martin</MenuItem>
                                <MenuItem value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</MenuItem>
                                <MenuItem value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MenuItem>
                                <MenuItem value="Samoa">Samoa</MenuItem>
                                <MenuItem value="San Marino">San Marino</MenuItem>
                                <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                                <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                                <MenuItem value="Senegal">Senegal</MenuItem>
                                <MenuItem value="Serbia">Serbia</MenuItem>
                                <MenuItem value="Serbia and Montenegro">Serbia and Montenegro</MenuItem>
                                <MenuItem value="Seychelles">Seychelles</MenuItem>
                                <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                                <MenuItem value="Singapore">Singapore</MenuItem>
                                <MenuItem value="Sint Maarten">Sint Maarten</MenuItem>
                                <MenuItem value="Slovakia">Slovakia</MenuItem>
                                <MenuItem value="Slovenia">Slovenia</MenuItem>
                                <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                                <MenuItem value="Somalia">Somalia</MenuItem>
                                <MenuItem value="South Africa">South Africa</MenuItem>
                                <MenuItem value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</MenuItem>
                                <MenuItem value="South Sudan">South Sudan</MenuItem>
                                <MenuItem value="Spain">Spain</MenuItem>
                                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                <MenuItem value="Sudan">Sudan</MenuItem>
                                <MenuItem value="Suriname">Suriname</MenuItem>
                                <MenuItem value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</MenuItem>
                                <MenuItem value="Swaziland">Swaziland</MenuItem>
                                <MenuItem value="Sweden">Sweden</MenuItem>
                                <MenuItem value="Switzerland">Switzerland</MenuItem>
                                <MenuItem value="Syrian Arab Republic">Syrian Arab Republic</MenuItem>
                                <MenuItem value="Taiwan, Province of China">Taiwan, Province of China</MenuItem>
                                <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                                <MenuItem value="Tanzania, United Republic of">Tanzania, United Republic of</MenuItem>
                                <MenuItem value="Thailand">Thailand</MenuItem>
                                <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
                                <MenuItem value="Togo">Togo</MenuItem>
                                <MenuItem value="Tokelau">Tokelau</MenuItem>
                                <MenuItem value="Tonga">Tonga</MenuItem>
                                <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                                <MenuItem value="Tunisia">Tunisia</MenuItem>
                                <MenuItem value="Turkey">Turkey</MenuItem>
                                <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                                <MenuItem value="Turks and Caicos Islands">Turks and Caicos Islands</MenuItem>
                                <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                                <MenuItem value="Uganda">Uganda</MenuItem>
                                <MenuItem value="Ukraine">Ukraine</MenuItem>
                                <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
                                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                <MenuItem value="United States">United States</MenuItem>
                                <MenuItem value="United States Minor Outlying Islands">United States Minor Outlying Islands</MenuItem>
                                <MenuItem value="Uruguay">Uruguay</MenuItem>
                                <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                                <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                                <MenuItem value="Venezuela">Venezuela</MenuItem>
                                <MenuItem value="Viet Nam">Viet Nam</MenuItem>
                                <MenuItem value="Virgin Islands, British">Virgin Islands, British</MenuItem>
                                <MenuItem value="Virgin Islands, U.s.">Virgin Islands, U.s.</MenuItem>
                                <MenuItem value="Wallis and Futuna">Wallis and Futuna</MenuItem>
                                <MenuItem value="Western Sahara">Western Sahara</MenuItem>
                                <MenuItem value="Yemen">Yemen</MenuItem>
                                <MenuItem value="Zambia">Zambia</MenuItem>
                                <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                            </TextField>

                        </>
                    )}

                />
            </div>

            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="state"
                    rules={{ required: "State name required*." }}
                    render={({ field }) => (
                        <TextField
                            inputProps={{
                                pattern: "[a-zA-Z ]{2,}$",
                                title: "Accept only alphabets",
                                // style: { fontSize: 20 }
                            }}
                            id="state"
                            label="State *"
                            variant="outlined"
                            placeholder="Enter Your State name"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.state)}
                            helperText={errors.state?.message}
                        // select
                        >

                           


                        </TextField>

                    )}
                />
            </div>
            < div className="col-sm-4" style={{ padding: "20px" }}>
                <Controller
                    control={control}
                    name="cityName"
                    rules={{ required: "City name required*." }}
                    render={({ field }) => (
                        <>
                            <TextField
                                inputProps={{
                                    pattern: "[a-zA-Z ]{2,}$",
                                    title: "Accept only alphabets",
                                    // style: { fontSize: 20 }
                                }}
                                id="cityname"
                                label="City Name *"
                                variant="outlined"
                                placeholder="Enter Your City Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.cityName)}
                                helperText={errors.cityName?.message}
                            />

                        </>
                    )}

                />
            </div>
            < div className="col-sm-4" style={{ padding: "20px" }}>



                <TextField
                    id="file"
                    label="Documents For Date Of Birth Varification (jpeg,png,pdf)"
                    variant="outlined"
                    // placeholder=""
                    fullWidth
                    margin="normal"
                    type="file"
                    {...register("file")}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: "application/pdf,image/jpeg,image/png" }}
                    required
                    error={Boolean(errors?.file)}
                    helperText={errors.file?.message}
                    
                    //   {values.file[0].size>20000}
 
 onChange={fileChangedHandler}
                />
          {/* <div className="mb-3">
    <label for="formFile" className="form-label">Documents For Date Of Birth Varification (jpeg,png,pdf)</label>
   <input className="form-control"
    type="file"
    id="file"
    // maxFileSize= "10000"
    required
    {...register("file")}
    accept= "application/pdf,image/jpeg,image/png"
    onChange={fileChangedHandler}
    
    />
      </div> */}


            </div>

        </div >

    );
};
export default FillBasicInfo;