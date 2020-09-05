import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts= [
        {id:1, message:'Hi,how are you?',likesCount:12},
        {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
        {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
        {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
    ];

    let postElements = posts.map(p =>  <Post message ={p.message} likesCount={p.likesCount} />);

    return (
        <div>
           <h3> My posts </h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )

}

export default MyPosts;