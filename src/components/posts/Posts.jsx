import React from "react";
import postlist from "../../posts.json";
import Post from "../post/Post";
import "./posts.css";


const PostList = () => {

    return (
        <div className="posts">
            {postlist.length && 
                postlist.map((post, i) => {
                 return (       <div key={i}>
                    <Post post={post} />
                    </div>)})
            }
        </div>
    )
}

export default PostList
