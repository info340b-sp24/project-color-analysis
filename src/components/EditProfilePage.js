import React from "react";
import { Link } from 'react-router-dom';

const profileInfo = {img: 'img/profile_image.png', alt: "profile image"}

function Profile(props) {
  
    const info = props.items;
  
    return (
        <img src={info.img} alt={info.alt} className="rounded-circle border border-dark"/>
    )
}

export function EditProfilePage() {

    return (
        <div className="edit-profile-box">
            <div className="section-part1">
                <h1>Edit Profile</h1>
                <Profile items={profileInfo} />
                <button type="button" className="btn-color rounded-5">Upload Picture</button>
            </div>
            <div className="section-part2">
                <form className="userInfo">
                    <div className="userName">
                        <label for="userName">Name</label>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="userAge">
                        <label for="userAge">Age</label>
                        <input type="text" placeholder="Age"/>
                    </div>
                    <Link to="../profile">
                        <button type="button" className="btn-color rounded-5">Save</button> 
                    </Link>
                </form>
            </div>
        </div>
    );
  }