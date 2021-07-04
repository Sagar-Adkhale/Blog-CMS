import Post from "../post/Post";
import "./posts.css";
import pic from "../../asset/Picture1.jpg";
import pic2 from "../../asset/Picture2.jpg";
import pic3 from "../../asset/cycle.jpg";
import pic4 from "../../asset/anto.jpg";



export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://blog.feedspot.com/wp-content/uploads/2016/09/Cycling-Blogs.jpg" />
      <Post img= {pic} />
      <Post img={pic2}/>
      <Post img= {pic3} />
      <Post img={pic4}/>
    </div>
  );
}
