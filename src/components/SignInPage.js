import React from 'react';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useNavigate } from 'react-router-dom';

export function SignInPage(props) {
    const currentUser = props.currentUser;
    const auth = getAuth();
    const navigateTo = useNavigate();
    const configObj = {
        signInOptions: [
          { 
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
          },
          {
            provider: GoogleAuthProvider.PROVIDER_ID
          }
        ],
        signInFlow: 'popup',
        callbacks: {
          signInSuccessWithAuthResult: () => {
            navigateTo('/home');
            return false;
          }
        },
        credentialHelper: 'none'
      }

    return (
        <div className="signIn">
            <Nav currentUser={currentUser}/>
            <div className="signInContent">
                <h1> Welcome to ColorAura! </h1>
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
            </div>
            <Footer />
        </div>
    )
}