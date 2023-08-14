import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols={30} rows={3}></textarea>
                    <button>Add post</button>
                </div>
                <Post postText={'Post 1'} likesCount={30}/>
                <Post postText={'Post 2'} likesCount={44}/>
                <Post postText={'Post 3'} likesCount={12}/>
            </div>
        </div>
    );
};

export default MyPosts;