import { React } from "react";
import { Link } from 'react-router-dom';

export function EditProfilePage(props) {

    return (
        <div className="edit-profile-box">
            <div className="section-part1">
                <h1>Edit Profile</h1>
                <img src='img/profileImage_default.png' alt="default image" className="rounded-circle border border-dark"/> 
                <label htmlFor="imageUploadInput" className="btn btn-color rounded-5">Upload Picture</label>
                <input type="file" name="image" id="imageUploadInput" className="d-none"/>
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