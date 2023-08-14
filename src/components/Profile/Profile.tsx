
import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div>
            <img className={s.mainImg} src="https://images.hdqwalls.com/wallpapers/star-wars-day-4k-nl.jpg" alt=""/>
            <div>avatar + description</div>

            <MyPosts/>
        </div>
    );
};

export default Profile;