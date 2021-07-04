import "./header.css";
import image3 from'../../asset/ab.jpeg'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">our slogan</span> */}
        <span className="headerTitleLg">GUTS</span>
      </div>
      <img
        className="headerImg"
        src={image3}
        alt=""
      />
    </div>
  );
}
