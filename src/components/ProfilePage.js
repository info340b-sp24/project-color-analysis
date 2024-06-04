import { React, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, off } from "@firebase/database";
import { getAuth, signOut } from 'firebase/auth';

const handleSignOut = (event) => {
  signOut(getAuth());
}

function Profile(props) {
  const user = props.user;
  console.log("debug1");

  const db = getDatabase();
  const userRef = ref(db, "userData/" + user.uid);

  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const userObject = snapshot.val();
      setUserEmail(userObject.email);
      setUserName(userObject.name);
    })
    return () => {
      off(userRef);
    }
  }, [])

  return (
    <section className="section-one">
      <h1>My profile</h1>
      <div>
        <img src='img/profileImage_default.png' alt="profile image" className="rounded-circle border border-dark"/>
        <p>Name : {userName}</p>
        <p>Email : {userEmail}</p>
      </div>
      <Link to="../edit">
        <button type="button" class="btn-color rounded-5">Edit Profile</button>
      </Link>
      <Link to="../signin">
        <button type="button" class="btn-color rounded-5" onClick={handleSignOut}>Sign Out</button> 
      </Link>
    </section>
  )
}

function QuizResult(props) {
  const user = props.user;
  console.log("debug2");

  const db = getDatabase();
  const userRef = ref(db, "userData/" + user.uid);

  const [resultTemp, setResultTemp] = useState(null);
  const [resultSeason, setResultSeason] = useState(null);
  
  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const userObject = snapshot.val();
      setResultTemp(userObject.temp);
      setResultSeason(userObject.season);
    })
    return () => {
      off(userRef);
    }
  }, [])

  return (
    (resultTemp && resultSeason) &&
    <p>You are a {resultTemp} {resultSeason}!</p>
  )
}

function SavedItem({ img, alt, title, price, link }) {
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
  const user = props.user;
  const db = getDatabase();
  const userLikedRef = ref(db, "userData/" + user.uid + "/liked");
  
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    onValue(userLikedRef, (snapshot) => {
      const likedObject = snapshot.val();
      if (likedObject) {
        const likedKeys = Object.keys(likedObject);
        const likedItems = likedKeys.filter((key) => {
          const item = likedObject[key];
          return item.img
        }).map((key) => {
          const { img, alt, title, price, link } = likedObject[key];
          return { img, alt, title, price, link };
        })
        setSavedItems(likedItems);
      } else {
        setSavedItems([]);
      }
    })
    return () => {
      off(userLikedRef);
    }
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
  const user = props.user;
  const db = getDatabase();
  const itemsRef = ref(db, "items");
  const userRef = ref(db, "userData/" + user.uid);

  const [recItems, setRecItems] = useState([]);
  const [resultTemp, setResultTemp] = useState(null);
  const [resultSeason, setResultSeason] = useState(null);


  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const userObject = snapshot.val();

      setResultTemp(userObject.temp);
      setResultSeason(userObject.season);
    })

    onValue(itemsRef, (snapshot) => {
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
      // console.log(allRecItems);
      setRecItems(allRecItems); 
    })

    return () => {
      off(itemsRef);
      off(userRef);
    }
  })

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

    const user = props.user;

    return (
      <div className="profile">
        <Nav />
        <div className="profile-content">
          <Profile user={user}/>
          <section className="section-two">
            <div className="flex-box bg-color quizBox">
              <div className="flex-subtitle">
                <img src="img/quiz_result_icon.png" alt="quiz result icon"/>
                <h2>Quiz Result</h2>                
              </div>
              <QuizResult user={user}/>
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/saved_items_icon.png" alt="saved items icon"/>
                <h2>Saved Items</h2>
              </div>
              <SavedItems user={user}/>
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/recommendations_icon.png" alt="recommendations icon"/>
                <h2>Recommendations</h2>
              </div>
              <RecommendationItems user={user}/>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }