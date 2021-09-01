import "./header.css";
import bannerImg from'../../asset/banner.jpg'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">our slogan</span> */}
        <span className="headerTitleLg">GUTS</span>
      </div>
      <img
        className="headerImg"
        src={bannerImg}
        alt=""
      />
    </div>
  );
}

