import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        {id:1, message:'Hi,how are you?',likesCount:12},
        {id:2, message:'gdfhfdhfdhg hth',likesCount:11},

    ];

    return (
        <div>
           <h3> My posts </h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message ={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message ={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )

}

export default MyPosts;