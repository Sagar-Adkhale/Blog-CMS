import React from "react";
import postlist from "../../posts.json";
import Post from "../post/Post";
import "./posts.css";


const PostList = () => {

    return (
        <div className="posts">
            {postlist.length && 
                postlist.map((post, i) => {
                 return <Post post={post} />})
            }
        </div>
    )
}

export default PostList
