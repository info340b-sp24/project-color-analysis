import { React, useEffect, useState } from "react";
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
import { SignInPage } from "./components/SignInPage";
import { getDatabase, DataSnapshot, ref, push as firebasePush, onValue, set as firebaseSet } from 'firebase/database';

import { Route, Routes, Navigate, useNavigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigateTo = useNavigate();

  // console.log(currentUser);

  const database = getDatabase();

  // const userDataRef = ref(database, "userData");


  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("signing in as", user.displayName);
        setCurrentUser(user);
        
        // console.log("is not null");
        if (user.uid != null) {
          // console.log("test is not null")
          const userRef = ref(database, "userData/" + user.uid + "/dob");
          firebaseSet(userRef, "09/20/03");
        }
        // const userRef = ref(database, "userData/" + currentUser.uid + "/dob");
        // firebaseSet(userRef, "09/20/03");


      }
      else {
        console.log("signed out");
        setCurrentUser(null);
        navigateTo('/signin');
      }
    })


  })

  return (
    <div>
      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="signin" element={<SignInPage />} />

        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="upload" element={<UploadPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="edit" element={<EditProfilePage />} />
          <Route path="quiz" element={<QuizLanding />} />
          <Route path="quiztaking" element={<QuizTaking />} />
        </Route>

      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  if (props.currentUser === null) {
    console.log("no user");
    return <Navigate to="/signin" />
  }
  else {
    return <Outlet />
  }
}

export default App;
