import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Adventure
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Nature
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            The Great Raigad Trip
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      This was our day, and meticulously planned. We were on our bike by 5.15 am, it was dark but very peaceful at the same time. The road was all welcoming to our next milestone which was the base of Varandha Ghat. After an hour in the ride me and Antony we both realized that all is good we are in good shape and can ride without worrying of distance. This was going to change soon.
      </p>
    </div>
  );
}
