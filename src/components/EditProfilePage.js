import React from "react";

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
                <dl>
                    <div className="name-plus-box">
                        <dt>Name</dt>
                        <dd>
                            <p>Name</p>
                        </dd>
                    </div>
                    <div className="name-plus-box">
                        <dt>Age</dt>
                        <dd>
                            <p>Age</p>
                        </dd>
                    </div>
                    <a href="ProfilePage.js">
                        <button type="button" className="btn-color rounded-5">Save</button> 
                    </a>
                </dl>
            </div>
        </div>
    );
  }