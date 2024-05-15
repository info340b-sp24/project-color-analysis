import React from "react";
import { LandingPage } from "./components/LandingPage";
import { ProductsPage } from "./components/ProductsPage";
import { UploadPage } from "./components/UploadPage";

function App() {

  return (
    <div>
      {/* <LandingPage/> */}
      <ProductsPage/>
      <UploadPage/>
    </div>
  );
}

export default App;
