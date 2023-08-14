import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    postText:string
    likesCount:number
}
const Post = (props:PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.avatarImg} src="https://i.pinimg.com/originals/89/fe/61/89fe61d65736d926b38395577f1e17d2.jpg" alt=""/>
                {props.postText}
                <div>
                    <span>Likes count: {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;