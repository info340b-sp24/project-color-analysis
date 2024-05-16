import React from "react";
import { Nav } from './Nav';
import { Footer } from './Footer';
import { MaterialSymbol } from "react-material-symbols";

function Title() {
    return (
        <section className="upload"> 
            <h1 className="upload-heading-1">
                Upload Product
            </h1>
        </section>
    )
}

function UploadPicture() {
    return (
        <section className="upload">
            <div className="icon-item"> 
                    <span className="material-icons material-symbols-outlined">upload</span>
            </div>
    
            <div className="upload-file-buttons">
                <div className="file-input">
                    <input type="file" className="file-input" id="file-input" class="file-input__input"/>
                    <label className="file-input__label" for="file-input">
                      <span className="file-input-span">Choose file</span>
            
                    </label>
                </div>
                <div className="reset-button">
                    <button className="reset">Reset</button>
                </div>
            </div>
        </section>
    )
}



function UploadInfo() {
    return (
        <section className="upload">
            <h2 className="product-info-title">
                Product Information
            </h2>

            <form className="product-name-type">
                <div className="product-name-container"> 
                    <label for="productname" className="product-name">Name</label>
                    <input type="text" id="productname" className="product-name-input" placeholder="Name"/>
                </div>

                <div className="type">
                    <label for="dropdown-box" className="type-dropdown-box">Type</label>
                    <select id="dropdown-box" className="dropdown-initial">
                        <option className="dropdown-initial" value="" disabled selected>Type</option>
                        <option value="makeup">Make-up</option>
                        <option value="clothing">Clothing</option>
                    </select>
                </div>
            </form>

            <form className="description-name-container">
                <label for="desc" className="description-name">Description</label>
                <textarea id="desc" className="description-input" placeholder="Description"></textarea>
            </form>

            <form className="upload categories">
                <h3>
                    Categories
                </h3>
                <div className="season-temperature"> 
                    <div className="season">
                        <select className="season-initial">
                            <option value="" disabled selected>Season</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                        </select>
                    </div>

                    <div className="temperature">
                        <select className="temperature-initial">
                            <option value="" disabled selected>Temperature</option>
                            <option value="cool">Cool</option>
                            <option value="warm">Warm</option>
                        </select>
                    </div>
                </div>

                <div className="value-chroma">
                    <div className="value">
                        <select className="value-initial">
                            <option value="" disabled selected>Value</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div className="chroma">
                        <select className="chroma-initial">
                            <option value="" disabled selected>Chroma</option>
                            <option value="bright">Bright</option>
                            <option value="muted">Muted</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="upload-finish">
                <button className="upload-button">Upload Product</button>
            </div>

        </section>
    )
}


export function UploadPage() {
    return (
      <div>
        <Nav />
        <main>
            <Title />
            <section className="flex-container-upload">
                <section className="flex-item-left">
                    <UploadPicture />
                </section>
                <section className="flex-item-right">
                    <UploadInfo />
                </section>
            </section>
        </main>
        <Footer />
      </div>
    );
}