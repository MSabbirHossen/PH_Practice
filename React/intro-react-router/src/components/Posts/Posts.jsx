import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/POst';



const Posts = () => {
    const posts = useLoaderData();
    // console.log("🚀 ~ Posts ~ post:", posts)
    return (
        <div>
           {/* <h1>{posts.length}</h1> */}
           {
            posts.map( post => <Post key={post.id} post={post}></Post>)
           }
        </div>
    );
};

export default Posts;