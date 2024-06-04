import React, { useState } from "react";
import { Nav } from './Nav';
import { Footer } from './Footer';
// import { getDatabase, ref as databaseRef, push as firebasePush, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set as firebaseSet } from 'firebase/database';

// Assume Firebase is initialized elsewhere in your app
// const db = getDatabase();

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
    // const [imageFile, setImageFile] = useState(undefined)
    // const [imageUrl, setImageUrl] = useState(undefined)

    // const handleChange = (event) => {
    //     if (event.target.files.length > 0 && event.target.files[0]) {
    //         const imageFile = event.target.files[0];
    //         setImageFile(imageFile);
    //         setImageUrl(URL.createObjectURL(imageFile));
    //     }
    // };

    // const handleReset = () => {
    //     setImageFile(null);
    //     setImageUrl(null);
    //     document.getElementById('file-input').value = '';
    // };

    // const uploadImageFile = async () => {
    //     const storage = getStorage();
    //     const fileRef = storageRef(storage, "path/to/myfile.png");
      
    //     try { //try/catch to handle errors
    //       await uploadBytes(fileRef, imageFile) //asynchronous upload
    //       const url = await getDownloadURL(fileRef); //asynch query for public URL
    //       //...do something with the url, such as set it to state for rendering
    //       //...or save that url in the realtime database
    //     } catch (err) {
    //       console.log(err); //log any errors for debugging
    //     }
    // }

    // return (
    //     <section className="upload">
    //         <div className="icon-item">
    //             <span className="material-icons material-symbols-outlined">upload</span>
    //         </div>
    //         <div className="upload-file-buttons">
    //             <div className="file-input">
    //                 <input
    //                     type="file"
    //                     className="file-input"
    //                     id="file-input"
    //                     name="file-input__input"
    //                     onChange={handleImageChange}
    //                 />
    //                 <label className="file-input__label" htmlFor="file-input">
    //                     <span className="file-input-span">Choose file</span>
    //                 </label>
    //             </div>
    //             <div className="reset-button">
    //                 <button className="reset" onClick={handleReset}>Reset</button>
    //             </div>
    //         </div>
    //     </section>
    // )
}

function UploadInfo({ validateAndSubmit }) {
    // const [productInfo, setProductInfo] = useState({
    //     alt: '', // description
    //     category: '', // type
    //     filters: [], //filters
    //     img: '', // img file
    //     key: '', // img url
    //     likedProduct: false,
    //     link: '', // img url
    //     price: '',
    //     title: '' // product name
    // });

    // const productInfoCopy = productInfo;

    // const handleChange = (event) => {
    //     let newValue = event.target.value;
    //     let name = event.target.name;

    //     if (name != 'season' || name != 'temperature' || name != 'chroma' || name != 'value') {
    //         productInfoCopy[name] = newValue;
    //     } else {
    //         productInfoCopy.filters.push = newValue;
    //     }

    //     setProductInfo(productInfoCopy);
    // }


    // return (
        // <section className="upload">
        //     <h2 className="product-info-title">
        //         Product Information
        //     </h2>

        //     <form className="product-name-type">
        //         <div className="product-name-container">
        //             <label htmlFor="productname" className="product-name">Name</label>
        //             <input
        //                 type="text"
        //                 id="productname"
        //                 name="title"
        //                 className="product-name-input"
        //                 placeholder="Name"
        //                 value={productInfo.title || ''}
        //                 onChange={handleChange}
        //             />
        //         </div>

        //         <div className="type">
        //             <label htmlFor="dropdown-box" className="type-dropdown-box">Type</label>
        //             <select
        //                 id="dropdown-box"
        //                 name="category"
        //                 className="dropdown-initial"
        //                 value={productInfo.category || ''}
        //                 onChange={handleChange}
        //             >
        //                 <option value="" disabled>Type</option>
        //                 <option value="makeup">Make-up</option>
        //                 <option value="clothing">Clothing</option>
        //             </select>
        //         </div>
        //     </form>

        //     <form className="description-name-container">
        //         <label htmlFor="desc" className="description-name">Description</label>
        //         <textarea
        //             id="desc"
        //             name="alt"
        //             className="description-input"
        //             placeholder="Description"
        //             value={productInfo.alt || ''}
        //             onChange={handleChange}
        //         ></textarea>
        //     </form>

        //     <form className="upload categories">
        //         <h3>
        //             Categories
        //         </h3>
        //         <div className="season-temperature">
        //             <div className="season">
        //                 <select
        //                     className="season-initial"
        //                     name="season"
        //                     value={productInfo.season || ''}
        //                     onChange={handleChange}
        //                 >
        //                     <option value="" disabled>Season</option>
        //                     <option value="winter">Winter</option>
        //                     <option value="spring">Spring</option>
        //                     <option value="summer">Summer</option>
        //                     <option value="autumn">Autumn</option>
        //                 </select>
        //             </div>

        //             <div className="temperature">
        //                 <select
        //                     className="temperature-initial"
        //                     name="temperature"
        //                     value={productInfo.temperature || ''}
        //                     onChange={handleChange}
        //                 >
        //                     <option value="" disabled>Temperature</option>
        //                     <option value="cool">Cool</option>
        //                     <option value="warm">Warm</option>
        //                 </select>
        //             </div>
        //         </div>

        //         <div className="value-chroma">
        //             <div className="value">
        //                 <select
        //                     className="value-initial"
        //                     name="value"
        //                     value={productInfo.value || ''}
        //                     onChange={handleChange}
        //                 >
        //                     <option value="" disabled>Value</option>
        //                     <option value="light">Light</option>
        //                     <option value="dark">Dark</option>
        //                 </select>
        //             </div>

        //             <div className="chroma">
        //                 <select
        //                     className="chroma-initial"
        //                     name="chroma"
        //                     value={productInfo.chroma || ''}
        //                     onChange={handleChange}
        //                 >
        //                     <option value="" disabled>Chroma</option>
        //                     <option value="bright">Bright</option>
        //                     <option value="muted">Muted</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </form>
        //     <div className="upload-finish">
        //         <button className="upload-button" type="button" onClick={validateAndSubmit}>Upload Product</button>
        //     </div>
        // </section>
    // )
}

async function saveProductToDatabase(productInfo, imageFile) {
//     // try {
//     //     const newProductRef = firebasePush(databaseRef(db, 'products'));
//     //     await set(newProductRef, {
//     //         ...productInfo
//     //         // need to add image and url
//     //     });
//     // } catch (err) {
//     //     console.log(err);
//     //     throw new Error("Failed to save product to the database");
//     // }
}

export function UploadPage() {

    // uploading image
    const [imageFile, setImageFile] = useState(undefined)
    const [imageUrl, setImageUrl] = useState(undefined)
    const [productInfo, setProductInfo] = useState({
        alt: '', // description
        category: '', // type
        filters: [], //filters
        img: imageFile, // img file
        key: '', // img url
        likedProduct: false,
        link: imageUrl, // img url
        price: '',
        title: '' // product name
    });

    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0];
            setImageFile(imageFile);
            setImageUrl(URL.createObjectURL(imageFile));
        }
    };

    const handleReset = () => {
        setImageFile(null);
        setImageUrl(null);
        document.getElementById('file-input').value = '';
    };

    const uploadImageFile = async () => {
        const storage = getStorage();
        const fileRef = storageRef(storage, "path/to/myfile.png");
      
        // get the url to this uploaded file so we can reference it from the web
        const imageUrl = await getDownloadURL(imageFile);
        console.log(imageUrl);
    }


    // uploading product info

    const productInfoCopy = productInfo;

    const handleChange = (event) => {
        let newValue = event.target.value;
        let name = event.target.name;

        if (name !== 'season' || name !== 'temperature' || name !== 'chroma' || name !== 'value') {
            productInfoCopy[name] = newValue;
        } else {
            productInfoCopy.filters.push(newValue);
        }

        setProductInfo(productInfoCopy);
    }

    const validateAndSubmit = async () => {
        if (!imageFile) {
            alert("Please upload an image.");
            return;
        }

        if (!productInfo.alt || !productInfo.category || !productInfo.filters || !productInfo.img || !productInfo.key || !productInfo.likedProduct || !productInfo.link || !productInfo.price || !productInfo.title) {
            alert("Please fill in all the fields.");
            return;
        }

        try {
            await saveProductToDatabase(productInfo, imageFile);

            alert("Product uploaded successfully!");
            // Resetting form
            setImageFile(null);
            setImageUrl(null);
            setProductInfo({});
            document.getElementById('file-input').value = '';
        } catch (error) {
            alert("An error occurred while uploading the product.");
        }
    };

    return (
        <div>
            <Nav />
            <main>
                <Title />
                <section className="flex-container-upload">
                    <section className="flex-item-left">
                        <section className="upload">
                            <div className="icon-item">
                                <span className="material-icons material-symbols-outlined">upload</span>
                            </div>
                            <div className="upload-file-buttons">
                                <div className="file-input">
                                    <input
                                        type="file"
                                        className="file-input"
                                        id="file-input"
                                        name="file-input__input"
                                        onChange={handleImageChange}
                                    />
                                    {/* <label className="file-input__label" htmlFor="file-input">
                                        <span className="file-input-span">Choose file</span>
                                    </label> */}
                                </div>
                                <div className="reset-button">
                                    <button className="reset" onClick={handleReset}>Reset</button>
                                </div>
                            </div>
                        </section>
                        <UploadPicture
                            setImageFile={setImageFile}
                            setImageUrl={setImageUrl}
                        />
                    </section>
                    <section className="flex-item-right">
                        <section className="upload">
                            <h2 className="product-info-title">
                                Product Information
                            </h2>

                            <form className="product-name-type">
                                <div className="product-name-container">
                                    <label htmlFor="productname" className="product-name">Name</label>
                                    <input
                                        type="text"
                                        id="productname"
                                        name="title"
                                        className="product-name-input"
                                        placeholder="Name"
                                        value={productInfo.title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="type">
                                    <label htmlFor="dropdown-box" className="type-dropdown-box">Type</label>
                                    <select
                                        id="dropdown-box"
                                        name="category"
                                        className="dropdown-initial"
                                        value={productInfo.category}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Type</option>
                                        <option value="makeup">Make-up</option>
                                        <option value="clothing">Clothing</option>
                                    </select>
                                </div>
                            </form>

                            <form className="description-name-container">
                                <label htmlFor="desc" className="description-name">Description</label>
                                <textarea
                                    id="desc"
                                    name="alt"
                                    className="description-input"
                                    placeholder="Description"
                                    value={productInfo.alt}
                                    onChange={handleChange}
                                ></textarea>
                            </form>

                            <form className="upload categories">
                                <h3>
                                    Categories
                                </h3>
                                <div className="season-temperature">
                                    <div className="season">
                                        <select
                                            className="season-initial"
                                            name="season"
                                            value={productInfo.season}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Season</option>
                                            <option value="winter">Winter</option>
                                            <option value="spring">Spring</option>
                                            <option value="summer">Summer</option>
                                            <option value="autumn">Autumn</option>
                                        </select>
                                    </div>

                                    <div className="temperature">
                                        <select
                                            className="temperature-initial"
                                            name="temperature"
                                            value={productInfo.temperature}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Temperature</option>
                                            <option value="cool">Cool</option>
                                            <option value="warm">Warm</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="value-chroma">
                                    <div className="value">
                                        <select
                                            className="value-initial"
                                            name="value"
                                            value={productInfo.value}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Value</option>
                                            <option value="light">Light</option>
                                            <option value="dark">Dark</option>
                                        </select>
                                    </div>

                                    <div className="chroma">
                                        <select
                                            className="chroma-initial"
                                            name="chroma"
                                            value={productInfo.chroma}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Chroma</option>
                                            <option value="bright">Bright</option>
                                            <option value="muted">Muted</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <div className="upload-finish">
                                <button className="upload-button" type="button" onClick={validateAndSubmit}>Upload Product</button>
                            </div>
                        </section>
                        <UploadInfo
                            productInfo={productInfo}
                            setProductInfo={setProductInfo}
                            validateAndSubmit={validateAndSubmit}
                        />
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}