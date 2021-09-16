
import React from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../../posts.json";
import "./singlePost.css";

const Post = (props) => {
    const validId = parseInt( props.match.params.id);
    console.log("log",validId);
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.photo = post.thumbnail? post.thumbnail : ""
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
  
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {fetchedPost.photo && (
            <img src={fetchedPost.photo} alt="" className="singlePostImg" />
          )}
        
            <h1 className="singlePostTitle">
              {fetchedPost.title}
            </h1>
          
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: {fetchedPost.author}
            </span>
            <span className="singlePostDate">
            {fetchedPost.date}
            </span>
          </div>
          <p className="singlePostDesc">
          <Markdown children={fetchedPost.content} /></p>
        </div>
      </div>
    );
}

export default Post
