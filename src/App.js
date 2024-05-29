import {React} from "react";
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
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
// import { getDatabase, DataSnapshot, ref, push as firebasePush, onValue } from 'firebase/database';

import { Route, Routes } from "react-router-dom";



function App() {
  

  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="edit" element={<EditProfilePage />} />
        <Route path="quiz" element={<QuizLanding/>} />

      {/* <QuizResultCW/>
      <QuizResultWA/>
      <QuizResultWS/>
      <QuizResultCS/>
      <QuizTaking/> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
