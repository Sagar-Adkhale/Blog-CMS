import React from "react";
import "./slider.css";
import { Carousel } from "react-responsive-carousel";
import posts from "../../posts.json";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div>
      <Carousel
        autoPlay="true"
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        {posts.map((post, i) => {
          return (
            <div key={i} className="head-text">
              <div className="head-image">
                <img className="sliderImg" alt="" src={post.sliderImg} /> 
              </div>
              <div className="ctext">
                 
                <Link to={`/post/${post.id}`} className="link">
                  <h1> {post.title}</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
