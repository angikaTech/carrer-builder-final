
import './App.css';
import './component/css/style-main.css';
import './component/css/colors/theme-skin-color-set-1.css';
import './component/css/preloader.css';
// import'./component/css/bootstrap.min.css';
import './component/css/jquery-ui.min.css';
import './component/css/animate.css';
// import'./component/css/css-plugin-collections.css';
import './component/css/menuzord-skins/menuzord-rounded-boxed.css';
import './component/css/custom-bootstrap-margin-padding.css';
import './component/css/responsive.css';
// import'./';
// import'./';
// import'./';
// import'./';

import { Route, Routes } from "react-router-dom";
import Engineering from './pages/engineering/Engineering';
import Home from './pages/home/Home';
import HigherEducation from './pages/higherEducation/HigherEducation';
import Pharmacy from './pages/pharmacy/Pharmacy';
import Physiotherapy from './pages/physiotherapy/Physiotherapy';
import Nursing from './pages/nursing/Nursing';
import AlliedHealthScience from './pages/alliedHealthScience/AlliedHealthScience';
import ParamedicalDiplomaCourses from './pages/paramedicalDiplomaCourses/ParamedicalDiplomaCourses';

//Enginnering
import ComputerScienceEnginnering from './pages/engineering/program/computerScienceEngineering/ComputerScienceEnginnering';
import Cse from './pages/engineering/program/cse/Cse';
import AidsEnginnering from './pages/engineering/program/aiDsEngineering/AidsEnginnering';
import InformationScienceEngineering from './pages/engineering/program/informationScienceEngineering/InformationScienceEngineering';
import CivilEngineering from './pages/engineering/program/civilengineering/CivilEngineering'
import ElectricalElectronicsEngineering from './pages/engineering/program/electronicsElectronicsEngineering/ElectricalElectronicsEngineering';
import ElectronicsCommunication from './pages/engineering/program/electronicsCommunication/ElectronicsCommunication';
import MechanicalEngineering from './pages/engineering/program/mechanicalEngineering/MechanicalEngineering';
// import MtechVlsiDesine from './pages/engineering/program/mtechVlsiDesine/MtechVlsiDesine';
import ElectricalEngineering from './pages/engineering/program/electricalEngineering/ElectricalEngineering';
import ArtificialIntelligenceMachineLearning from './pages/engineering/program/artificialIntelligenceMachineLearning/ArtificialIntelligenceMachineLearning';
import Architecture from './pages/engineering/program/architectre/Architecture';

//HigherEducation
import Bba from './pages/higherEducation/program/Bba';
import BbaAviation from './pages/higherEducation/program/BbaAviation';
import Bca from './pages/higherEducation/program/Bca';
import BCom from './pages/higherEducation/program/BCom';
import BComLogistics from './pages/higherEducation/program/BComLogistics';
import MbaHrMarketing from './pages/higherEducation/program/MbaHrMarketing';
import Mca from './pages/higherEducation/program/Mca';
import MCom from './pages/higherEducation/program/MCom';

//Pharmacy
import Bpharma from './pages/pharmacy/program/Bpharma';
import DiplomaInPharmacy from './pages/pharmacy/program/DiplomaInPharmacy';
import Dpharma from './pages/pharmacy/program/Dpharma';
import Mpharma from './pages/pharmacy/program/Mpharma';
import PharmaD from './pages/pharmacy/program/PharmaD';

//Physiotherapy
import Bpt from './pages/physiotherapy/program/Bpt';


//Nursing
import BscNursing from './pages/nursing/program/BscNursing';
import GeneralNursing from './pages/nursing/program/GeneralNursing';
import MscNursing from './pages/nursing/program/MscNursing';
import PbbscpcbscNursing from './pages/nursing/program/PbbscpcbscNursing';

//AlliedHealthScience
import BscAnestesiaOperation from './pages/alliedHealthScience/program/BscAnestesiaOperation';
import Bsccardiaccaretech from './pages/alliedHealthScience/program/Bsccardiaccaretech';
import BscMedicalLabTech from './pages/alliedHealthScience/program/BscMedicalLabTech';
import BscPerfusionTech from './pages/alliedHealthScience/program/BscPerfusionTech';
import BscRadiographyImaging from './pages/alliedHealthScience/program/BscRadiographyImaging';
import Optometry from './pages/alliedHealthScience/program/Optometry';
import RadiotheraphyTechonology from './pages/alliedHealthScience/program/RadiotheraphyTechonology';

//ParamedicalDiplomaCourses
import DipAnesthesia from './pages/paramedicalDiplomaCourses/program/DipAnesthesia';
import DipDialysisTechnology from './pages/paramedicalDiplomaCourses/program/DipDialysisTechnology';
import DipMedicalImagingTechnology from './pages/paramedicalDiplomaCourses/program/DipMedicalImagingTechnology';
import DipMedicalLabTechnology from './pages/paramedicalDiplomaCourses/program/DipMedicalLabTechnology';


// Mtech
import Mtech from './pages/mtech/Mtech';
import AIMachineLearning from './pages/mtech/program/AIMachineLearning';
import ComputerscienceEngineering from './pages/mtech/program/ComputerscienceEngineering';
import ConstructionTechnology from './pages/mtech/program/ConstructionTechnology';
import DataScience from './pages/mtech/program/DataScience';
import VLSIDesignEmbeddedSystem from './pages/mtech/program/VLSIDesignEmbeddedSystem';
import ProductDesignManufacturing from './pages/mtech/program/ProductDesignManufacturing';
import Others from './pages/others/Others';

// otp varification
import Otpform from './component/otpVarification/mobileOtp/OtpForm';
import Mainpage from './component/otpVarification/mobileOtp/main';

// dashboard
import Dashboard from './dashboard/mainpage/dashboard';
import AdminLogin from './component/adminLogin/AdminLogin';
import List from './dashboard/mainpage/List';
import Profile from './dashboard/mainpage/Profile';
import { UserContext } from './component/adminLogin/UserContext';
import Protected from './Protected';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './component/otpVarification/mobileOtp/firebase';
import Termsandcondition from './pages/Termsandcondition';
import Privacy from './pages/privacy';
import PasswordResetLink from './component/adminLogin/PasswordResetLink';
import PasswordEmailMassage from './component/adminLogin/ResetEmailMassage'
// import Email from './component/otpVarification/emailOtp/Email';



function App() {
 const [user] = useAuthState(auth);
  return (
    <div className="App">
      <UserContext.Provider value="hello world">
        <Routes >
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="termsandcondition" element={<Termsandcondition/>}/>
          <Route path="privacy" element={<Privacy/>}/>


          {/* Dashboard */}
          <Route path="adminLogin" element={<AdminLogin />} />
          <Route path="dashboard" element={
            <Protected user={user} >
              <Dashboard />
            </Protected>

          } />
          <Route path="list" element={<Protected user={user} ><List /></Protected>} />
          <Route path="profile" element={<Protected user={user} ><Profile /></Protected>} />
          <Route path="profile/:id" element={<Protected user={user} ><Profile /></Protected>} />

          <Route path="passwordreset" element={<PasswordResetLink />} />
          <Route path="password-massage" element={<PasswordEmailMassage />} />

          {/* otp */}
          <Route path="otp" element={<Otpform />} />
          <Route path="main" element={<Mainpage />} />
          {/* <Route path="email" element={<Email />} /> */}



          {/* Engineering route */}
          <Route path="engineering" element={<Engineering />} />

          <Route path="engineering/computerScienceEnginnering" element={<ComputerScienceEnginnering />} />
          <Route path="engineering/cse" element={<Cse />} />
          <Route path="engineering/aidsEnginnering" element={<AidsEnginnering />} />
          <Route path="engineering/informationScienceEngineering" element={<InformationScienceEngineering />} />
          <Route path="engineering/electronicsCommunication" element={<ElectronicsCommunication />} />
          <Route path="engineering/electronicsElectronicsEngineering" element={<ElectricalElectronicsEngineering />} />
          <Route path="engineering/mechanicalEngineering" element={<MechanicalEngineering />} />
          <Route path="engineering/civilEngineering" element={<CivilEngineering />} />

          <Route path="engineering/electricalEngineering" element={<ElectricalEngineering />} />
          <Route path="engineering/artificialIntelligenceMachineLearning" element={<ArtificialIntelligenceMachineLearning />} />
          <Route path="engineering/architecture" element={<Architecture />} />


          {/* HigherEducation route */}
          <Route path="highereducation" element={<HigherEducation />} />

          <Route path="highereducation/bba" element={<Bba />} />
          <Route path="highereducation/bbaaviation" element={<BbaAviation />} />
          <Route path="highereducation/bca" element={<Bca />} />
          <Route path="highereducation/bcom" element={<BCom />} />
          <Route path="highereducation/bcomlogistics" element={<BComLogistics />} />
          <Route path="highereducation/mbahrmarketing" element={<MbaHrMarketing />} />
          <Route path="highereducation/mca" element={<Mca />} />
          <Route path="highereducation/mcom" element={<MCom />} />


          {/* Pharmacy route */}
          <Route path="pharmacy" element={<Pharmacy />} />

          <Route path="pharmacy/bpharma" element={<Bpharma />} />
          <Route path="pharmacy/diplomainpharmacy" element={<DiplomaInPharmacy />} />
          <Route path="pharmacy/dpharma" element={<Dpharma />} />
          <Route path="pharmacy/mpharma" element={<Mpharma />} />
          <Route path="pharmacy/pharmad" element={<PharmaD />} />




          {/* Physiotherapy route */}
          <Route path="physiotherapy" element={<Physiotherapy />} />


          <Route path="physiotherapy/bpt" element={<Bpt />} />



          {/* Nursing route */}
          <Route path="nursing" element={<Nursing />} />


          <Route path="nursing/bscnursing" element={<BscNursing />} />
          <Route path="nursing/generalnursing" element={<GeneralNursing />} />
          <Route path="nursing/mscnursing" element={<MscNursing />} />
          <Route path="nursing/pbbscpcbscnursing" element={<PbbscpcbscNursing />} />



          {/*AlliedHealthScience route */}
          <Route path="alliedHealthScience" element={<AlliedHealthScience />} />

          <Route path="alliedHealthScience/bscanestesiaoperation" element={<BscAnestesiaOperation />} />
          <Route path="alliedHealthScience/bsccardiaccaretech" element={<Bsccardiaccaretech />} />
          <Route path="alliedHealthScience/bscmedicallabtech" element={<BscMedicalLabTech />} />
          <Route path="alliedHealthScience/bscperfusiontech" element={<BscPerfusionTech />} />
          <Route path="alliedHealthScience/bscradiographyimaging" element={<BscRadiographyImaging />} />
          <Route path="alliedHealthScience/optometry" element={<Optometry />} />
          <Route path="alliedHealthScience/radiotheraphytechonology" element={<RadiotheraphyTechonology />} />



          {/* ParamedicalDiplomaCourses route */}
          <Route path="paramedicalDiplomaCourses" element={<ParamedicalDiplomaCourses />} />

          <Route path="paramedicalDiplomaCourses/dipanesthesia" element={<DipAnesthesia />} />
          <Route path="paramedicalDiplomaCourses/dipdialysistechnology" element={<DipDialysisTechnology />} />
          <Route path="paramedicalDiplomaCourses/dipmedicalimagingtechnology" element={<DipMedicalImagingTechnology />} />
          <Route path="paramedicalDiplomaCourses/dipmedicallabtechnology" element={<DipMedicalLabTechnology />} />

          {/* Mtech */}
          {/* Mtech */}
          <Route path="mtech" element={<Mtech />} />

          <Route path="mtech/aIMachineLearning" element={<AIMachineLearning />} />
          <Route path="mtech/computerscienceEngineering" element={<ComputerscienceEngineering />} />
          <Route path="mtech/constructionTechnology" element={<ConstructionTechnology />} />
          <Route path="mtech/dataScience" element={<DataScience />} />
          <Route path="mtech/vLSIDesignEmbeddedSystem" element={<VLSIDesignEmbeddedSystem />} />
          <Route path="mtech/productDesignManufacturing" element={<ProductDesignManufacturing />} />



          {/* OTHERS */}
          <Route path="others" element={<Others />} />







        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
