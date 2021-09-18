import "./sidebar.css";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIssRwi23Jw7mt7uaHThxwVlBNQwRH075Yw&usqp=CAU"
          alt=""
        />
        <div class="sidebarSlogan">
        There are many bike sayings about bike popularity and biking, but one of my favorites saying about biking is “Learn to ride a bike. You will not regret it if you live.”  
        </div>
      </div>
      {/* {categories && categories.length>0 ?       <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((singleCategory)=>(
            <Link className="link" to={`/?category=${singleCategory.name}`}>
            <li className="sidebarListItem"> {singleCategory.name}</li>
            </Link>
          ))}
        </ul>
      </div> : ''} */}
     <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
