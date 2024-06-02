import { React, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, off, get } from "@firebase/database";
import { getAuth, signOut } from 'firebase/auth';


// const profileInfo = {img: 'img/profileImage_default.png', alt: "profile image", name: "", email: ""}

const handleSignOut = (event) => {
  signOut(getAuth());
}

// function Profile(props) {
  
//   const info = props.items;

//   console.log("debug1");
//   return (
//     <div>
//       <img src={info.img} alt={info.alt} className="rounded-circle border border-dark"/>
//       <p>Name : {info.name}</p>
//       <p>Email : {info.email}</p>
//     </div>
//   )
// }

function SavedItem({ img, alt, title, price, link }) {
  console.log("debug2");
  return (
    <div className="flex-img-text">
      <a href={link}>
        <img src={img} alt={alt}/>
      </a>
      <p>{title} {price}</p>
    </div>
  )
}

function SavedItems(props) {
  console.log("debug3");
  const db = getDatabase();
  const itemsRef = ref(db, "items");
  
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    onValue(itemsRef, (snapshot) => {
      const allItemsObject = snapshot.val();
      const allItemsKeys = Object.keys(allItemsObject);

      const allLikedItems = allItemsKeys.filter((key) => allItemsObject[key].likedProduct).map((key) => {
        const { img, alt, title, price, link } = allItemsObject[key];
        return { img, alt, title, price, link };
      });

      // console.log(allLikedItems);
      setSavedItems(allLikedItems); 
    })
    console.log("debug4");
    return () => {
      off(itemsRef);
    };
  }, [])

  const SavedItemsArray = savedItems.map((item, index) => (
    <SavedItem key={index} img={item.img} alt={item.alt} title={item.title} price={item.price} link={item.link} />
  ))

  return (
    <div className="flex-item-arrow">
      <div className="flex-item">
        {SavedItemsArray}
      </div>
      <div className="arrow-button">
        <span>
          <a className="btn">
            <span className="material-icons arrow">
              east
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}

function RecommendationItem({ img, alt, title, price, link }) {
  console.log("debug5");
  return (
    <div className="flex-img-text">
      <a href={link}>
        <img src={img} alt={alt}/>
        <p>{title} {price}</p>
      </a>
    </div>
  )
}

function RecommendationItems(props) {
  console.log("debug6");
  const db = getDatabase();
  const itemsRef = ref(db, "items");
  const resultRef = ref(db, "userData/HfUVYKVenWhsohGsCshV2rKLR743");

  const [recItems, setRecItems] = useState([]);
  const [resultTemp, setResultTemp] = useState(null);
  const [resultSeason, setResultSeason] = useState(null);


  useEffect(() => {
    onValue(resultRef, (snapshot) => {
      const resultObject = snapshot.val();
      console.log(resultObject);
      // const result = Object.keys(resultObject)[0];

      setResultTemp(resultObject.temp);
      setResultSeason(resultObject.season);
    });

    onValue(itemsRef, (snapshot) => {
      console.log("debug7");
      const allItemsObject = snapshot.val();
      const allRecItems = Object.keys(allItemsObject).filter((key) => {
        
        const itemFilters = allItemsObject[key].filters;
        const matchingTemp = itemFilters.includes(resultTemp);
        const matchingSeason = itemFilters.includes(resultSeason);

        return matchingTemp && matchingSeason;
      }).map((key) => {
        const { img, alt, title, price, link } = allItemsObject[key];
        return { img, alt, title, price, link };
      });
      console.log("debug12");
      // console.log(allRecItems);
      setRecItems(allRecItems); 
      console.log("debug13");
    })

    return () => {
      off(itemsRef);
    };
  }, [])

  const RecommendationItemsArray = recItems.map((item, index) => (
    <RecommendationItem key={index} img={item.img} alt={item.alt} title={item.title} price={item.price} link={item.link} />
  ))

  return (
    <div className="flex-item-arrow">
      <div className="flex-item">
        {RecommendationItemsArray}
      </div>
      <div className="arrow-button">
        <span>
          <a className="btn">
            <span className="material-icons arrow">
              east
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}

export function ProfilePage(props) {

    const user = props.user
    const db = getDatabase();
    const resultRef = ref(db, "userData/HfUVYKVenWhsohGsCshV2rKLR743");
    const userEmailRef = ref(db, "userData/" + user.uid + "/email");
    const userNameRef = ref(db, "userData/" + user.uid + "/name")
    const email = get(userEmailRef);
    console.log(email);

    const [resultTemp, setResultTemp] = useState(null);
    const [resultSeason, setResultSeason] = useState(null);

    useEffect(() => {
      onValue(resultRef, (snapshot) => {
        const resultObject = snapshot.val();
        console.log(resultObject);
        // const result = Object.keys(resultObject)[0];
  
        setResultTemp(resultObject.temp);
        setResultSeason(resultObject.season);
      });
    }, [])
    
    return (
      <div className="profile">
        <Nav />
        <div className="profile-content">
          <section className="section-one">
            <h1>My profile</h1>
            <div>
              <img src='img/profileImage_default.png' alt="profile image" className="rounded-circle border border-dark"/>
              <p>Name : </p>
              <p>Email : </p>
            </div>
            <Link to="../edit">
              <button type="button" class="btn-color rounded-5">Edit Profile</button>
            </Link>
            <Link to="../signin">
              <button type="button" class="btn-color rounded-5" onClick={handleSignOut}>Sign Out</button> 
            </Link>
          </section>
          <section className="section-two">
            <div className="flex-box bg-color quizBox">
              <div className="flex-subtitle">
                <img src="img/quiz_result_icon.png" alt="quiz result icon"/>
                <h2>Quiz Result</h2>                
              </div>
              {resultTemp && resultSeason &&
                <p>You are a {resultTemp} {resultSeason}!</p> 
              }
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/saved_items_icon.png" alt="saved items icon"/>
                <h2>Saved Items</h2>
              </div>
              <SavedItems/>
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/recommendations_icon.png" alt="recommendations icon"/>
                <h2>Recommendations</h2>
              </div>
              <RecommendationItems/>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }