import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const profileInfo = {img: 'img/profile_image.png', alt: "profile image", name: "Bella", age: "21", email: "bella@uw.edu"}

const savedList = [{src: 'img/profile_saved.png', alt: "saved items", info: "Naked2 Basics Eyeshadow Palette $35.00"},
{src: 'img/profile_saved.png', alt: "saved items", info: "Naked2 Basics Eyeshadow Palette $35.00"},
{src: 'img/profile_saved.png', alt: "saved items", info: "Naked2 Basics Eyeshadow Palette $35.00"}]

const recommendationList = [{src: 'img/profile_saved.png', alt: "saved items", info: "Naked2 Basics Eyeshadow Palette $35.00"},
{src: 'img/profile_saved.png', alt: "saved items", info: "Naked2 Basics Eyeshadow Palette $35.00"}]

function Profile(props) {
  
  const info = props.items;

  return (
    <div>
      <img src={info.img} alt={info.alt} className="rounded-circle border border-dark"/>
      <p>Name : {info.name}</p>
      <p>Age : {info.age}</p>
      <p>Email : {info.email}</p>
    </div>
  )
}

function SavedItem(props) {
  
  const { src, alt, info } = props;

  return (
    <div className="flex-img-text">
      <img src={src} alt={alt}/>
      <p>{info}</p>
    </div>
  )
}

function SavedItems(props) {

  const saved = props.items;

  const SavedItemsArray = saved.map((item, index) => (
    <SavedItem key={index} src={item.src} alt={item.alt} info={item.info} />
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

function RecommendationItem(props) {
  
  const { src, alt, info } = props;

  return (
    <div className="flex-img-text">
      <img src={src} alt={alt}/>
      <p>{info}</p>
    </div>
  )
}

function RecommendationItems(props) {
  
  const saved = props.items;

  const RecommendationItemsArray = saved.map((item, index) => (
    <RecommendationItem key={index} src={item.src} alt={item.alt} info={item.info} />
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

export function ProfilePage() {

    return (
      <div className="profile">
        <Nav />
        <div className="profile-content">
          <section className="section-one">
            <h1>My profile</h1>
            <Profile items={profileInfo} />
            <a href="EditProfilePage.js">
              <button type="button" class="btn-color rounded-5">Edit Profile</button>
            </a>
          </section>
          <section className="section-two">
            <div className="flex-box bg-color">
              <div className="flex-subtitle">
                <img src="img/quiz_result_icon.png" alt="quiz result icon"/>
                <h2>Quiz Result</h2>                
              </div>
              <p>You are a Warm Autumn!</p>
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/saved_items_icon.png" alt="saved items icon"/>
                <h2>Saved Items</h2>
              </div>
              <SavedItems items={savedList} />
            </div>
            <div className="flex-box">
              <div className="flex-subtitle">
                <img src="img/recommendations_icon.png" alt="recommendations icon"/>
                <h2>Recommendations</h2>
              </div>
              <RecommendationItems items={recommendationList} />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }