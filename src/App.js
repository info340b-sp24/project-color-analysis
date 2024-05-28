import React from "react";
import { EditProfilePage } from "./components/EditProfilePage";
import { LandingPage } from "./components/LandingPage";
import { ProductsPage } from "./components/ProductsPage";
import { ProfilePage } from "./components/ProfilePage";
import QuizLanding from './components/QuizLanding';
import QuizTaking from "./components/QuizTaking";
import QuizResultCW from './components/QuizResultCW';
import QuizResultWA from './components/QuizResultWA';
import QuizResultWS from './components/QuizResultWS';
import QuizResultCS from './components/QuizResultCS';
import { UploadPage } from "./components/UploadPage";

function App() {

  return (
    <div>
      {/* <LandingPage/> */}
      {/* <UploadPage/> */}
      {/* <ProductsPage/> */}
      {/* <ProfilePage/> */}
      {/* <EditProfilePage/> */}
      {/* <QuizLanding/> */}
      {/* <QuizResultCW/> */}
      {/* <QuizResultWA/> */}
      {/* <QuizResultWS/> */}
      {/* <QuizResultCS/> */}
      <QuizTaking/>
    </div>
  );
}

export default App;
