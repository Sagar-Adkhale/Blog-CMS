import "./post.css";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";


export default function Post({ post }) {
  const excerptList = post.content.split(" ").slice(0, 70).join(" ") + "...";
  console.log(excerptList);
  return (
    <div className="post">
      {post.thumbnail && <img className="postImg" src={post.thumbnail} alt=""/> }
      <div className="postInfo">
        <div className="postCats">
          {post.categories ? post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          )):""}
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
         Published on {post.date} by {post.author}
        </span>
      </div>
      <div className="postDesc">
      <Markdown children={excerptList}/>
      </div>
      <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
    
    </div>
  );
}