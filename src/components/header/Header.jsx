import "./header.css";
import bannerImg from'../../asset/banner.jpg'

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src={bannerImg}
        alt=""
      />
    </div>
  );
}

