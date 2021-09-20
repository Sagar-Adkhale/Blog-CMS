import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  
  return (
    <>
        <div id="container">

      <Header />
      {/* <div className="home container"> */}
      <div className="contact3 py-5">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
        <Posts  />
        </div>
        <div className="col-lg-3">

        <Sidebar />
        </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
