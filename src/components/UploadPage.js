import { React, useState } from "react";
import { Nav } from './Nav';
import { Footer } from './Footer';
import { MaterialSymbol } from "react-material-symbols";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { updateProfile } from 'firebase/auth';
import { getDatabase, ref as dbRef, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';



function Title() {
    return (
        <section className="upload">
            <h1 className="upload-heading-1">
                Upload Product
            </h1>
        </section>
    )
}

function UploadPicture(props) {

    const key = props.index;
    const setKey = props.clearIndex;
    const uploaded = props.uploaded;

    

    //   const currentUser = props.currentUser;
    //   const displayName = props.currentUser.userName;

    const [imageFile, setImageFile] = useState(undefined)
    //   let initialURL = props.currentUser.userImg;
    const [imageUrl, setImageUrl] = useState("initialURL")

    //image uploading!
    const handleChange = (event) => {

        if (uploaded == false){
            alert("Please fill out product description first.")
        }

        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImageUrl(URL.createObjectURL(imageFile));
        }
    }

    const handleImageUpload = async (event) => {
        if (uploaded == false){
            alert("Please fill out product description first.")
        } else {
            //upload the file to the storage db
            console.log("Uploading", imageFile);
            const storage = getStorage();
            const imageRef = ref(storage, "userImages/hello.png");
            await uploadBytes(imageRef, imageFile)

            // get the url to this uploaded file so we can reference it from the web
            const downloadUrlString = await getDownloadURL(imageRef);
            console.log(downloadUrlString);


            //also put in real time database (for fun)
            const db = getDatabase();
            const userImgRef = dbRef(db, "items/" + key + "/img");
            console.log(key);
            await firebaseSet(userImgRef, downloadUrlString);
            setKey('');
            alert("Product uploaded successfully");
        }
    }

    return (

        <section className="upload">
            <div className="icon-item">
                <span className="material-icons material-symbols-outlined">upload</span>
            </div>

            <div className="upload-file-buttons">
                <div className="file-input">
                    {/* <input onClick={handleChange} type="file" className="file-input" id="file-input" class="file-input__input" />
                    <label className="file-input__label" for="file-input">
                        <span className="file-input-span">Choose file</span>

                    </label> */}
                    <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
                    <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Upload to Database</button>
                    <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
                </div>
                {/* <div className="reset-button">
                    <button className="reset">Reset</button>
                </div> */}
            </div>
        </section>

    )
}



function UploadInfo() {

    const database = getDatabase();
    const imageRef = dbRef(database, "items");
    const [key, setKey] = useState("")

    let [productInfo, setProductInfo] = useState({

        alt: '', // description
        category: '', // type
        filters: [], //filters
        img: '', // img file
        key: '', // img url
        likedProduct: false,
        link: '', // img url
        price: '',
        title: '' // product name

    });

    const productInfoCopy = productInfo;

    const [typedValue, setTypedValue] = useState("");
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);

    const [uploaded, setUploaded] = useState(false);

    const [typedValueDesc, setTypedValueDesc] = useState("");
    const [selectedValueType, setSelectedValueType] = useState("");
    const [selectedValueTemp, setSelectedValueTemp] = useState("");
    const [selectedValueChroma, setSelectedValueChroma] = useState("");
    const [selectedValueSeason, setSelectedValueSeason] = useState("");
    const [selectedValueValue, setSelectedValueValue] = useState("");


    // const handleChange = (event) => {
    //      //update state and re-render!
    // }


    const handleChangeDesc = (event) => {
        const inputtedValue = event.target.value;
        setTypedValueDesc(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChangeType = (event) => {
        const inputtedValue = event.target.value;
        setSelectedValueType(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChangeTemp = (event) => {
        const inputtedValue = event.target.value;
        setSelectedValueTemp(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChangeSeason = (event) => {
        const inputtedValue = event.target.value;
        setSelectedValueSeason(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChangeChroma = (event) => {
        const inputtedValue = event.target.value;
        setSelectedValueChroma(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChangeValue = (event) => {
        const inputtedValue = event.target.value;
        setSelectedValueValue(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);
    }

    const handleChange = (event) => {

        console.log("changed");

        const inputtedValue = event.target.value;
        setTypedValue(inputtedValue);

        let newValue = event.target.value;
        let name = event.target.name;


        if (name === 'season' || name === 'temperature' || name === 'chroma' || name === 'value') {
            // productInfoCopy[name] = newValue;
            productInfoCopy.filters[index] = newValue;
            setIndex(index + 1);
        } else {
            // productInfoCopy.filters.push = newValue;
            productInfoCopy[name] = newValue;

        }

        setProductInfo(productInfoCopy);

    }

    // let key = "";

    const validateAndSubmit = (event) => {

        try {
            // firebaseSet(keyRef1, arraykey); 
            firebasePush(imageRef, productInfo);
            console.log("pushed");
            alert("Item Description submitted");

            onValue(imageRef, (snapshot) => {

                const products = snapshot.val();
                const length = Object.keys(products).length - 1;

                setKey(Object.keys(products)[length]);
                setUploaded(true);

                // console.log("original: "+heartRef);
                // setLiked(heartRef);

            })
        } catch (error) {
            alert("An error occurred while uploading the product description.")
        }
    }


    return (
        <section className="flex-container-upload">
            {/* <section className="flex-item-left">
                <UploadPicture index={key} clearIndex={setKey}/>
            </section> */}
            <section className="flex-item-right">
                < section className="upload" >

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
                                value={typedValue}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="type">
                            <label htmlFor="dropdown-box" className="type-dropdown-box">Type</label>
                            <select
                                id="dropdown-box"
                                name="category"
                                className="dropdown-initial"
                                value={selectedValueType}
                                onChange={handleChangeType}

                            >

                                <option value="" disabled>Type</option>
                                <option value="Product">Make-up</option>
                                <option value="Clothing">Clothing</option>
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
                            value={typedValueDesc}
                            onChange={handleChangeDesc}
                        ></textarea>
                    </form>




                    <form className="upload categories">

                        <h3>
                            Categories
                        </h3>

                        <div className="season-temperature">
                            <div className="season">

                                <select
                                    id="dropdown-box"
                                    className="season-initial"
                                    name="season"
                                    value={selectedValueSeason}
                                    onChange={handleChangeSeason}

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
                                    id="dropdown-box"
                                    className="temperature-initial"
                                    name="temperature"
                                    value={selectedValueTemp}
                                    onChange={handleChangeTemp}

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
                                    id="dropdown-box"
                                    className="value-initial"
                                    name="value"
                                    value={selectedValueValue}
                                    onChange={handleChangeValue}
                                >

                                    <option value="" disabled>Value</option>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>

                            <div className="chroma">
                                <select
                                    id="dropdown-box"
                                    className="chroma-initial"
                                    name="chroma"
                                    value={selectedValueChroma}
                                    onChange={handleChangeChroma}

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

                </section >
            </section>
            <section className="flex-item-left">
                <UploadPicture index={key} clearIndex={setKey} uploaded={uploaded}/>
            </section>

            {/* <UploadInfo

                productInfo={productInfo}
                setProductInfo={setProductInfo}
                validateAndSubmit={validateAndSubmit}

            /> */}


        </section>


    )
}


export function UploadPage() {
    return (
        <div>
            <Nav />
            <main>
                <Title />
                {/* <section className="flex-container-upload">
                    <section className="flex-item-left">
                        <UploadPicture />
                    </section>
                    <section className="flex-item-right"> */}
                <UploadInfo />
                {/* </section>
                </section> */}
            </main>
            <Footer />
        </div>
    );
}