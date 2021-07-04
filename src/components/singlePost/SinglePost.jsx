import { Link } from "react-router-dom";
import "./singlePost.css";
import pic from "../../asset/Picture1.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={pic}
          alt=""
        />
        <h1 className="singlePostTitle">
         The Great Raigad Trip
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Tarique Ansari
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          The day arrived since it was just two of us, we packed our stuff in our saddle Tour bags and were off from Vasai at 7 am (this was a mistake) on a Monday. The target was to reach Mahad, where the Friend waited for us in his beautiful village. And we rode through first 100km crossing Thane, Panvel and reaching to Pen via all the crazy traffic. By the time we were in Pen the temperatures were 41 degrees and I was particularly dehydrated with an unwillingness to ride. This was the moment I realized how foolish I was to think of doing 1000km and we had probably crossed just 130 km.

          <br />
          <br />
          After some discussion between me and Antony we decided that I was unable to ride we should go back home, but luck was with us, the Friend called and said rather than “going back home in some transports, why don’t you come over to my place which was just 60 km more and was on highway”.
I had taken a week off for this ride only and did not wanted to go back home. So, I convinced Antony to go to Friend’s place.
Now it was 5 pm and we met our friend Sagar who took us to his village, assisted by some of his friends, the moment we entered the place, we were more than happy that we agreed to Sagar’s Invitation. The classic Village has fields, mountains, and River and this was the same. It was a wonderful evening I had recovered and by the time we were off to bed we decided to visit Raigadh fort the next day and take a break from riding.
  </p>
      </div>
    </div>
  );
}
