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
        <div className="sidebarSlogan">
        My Name is Tarique Ansari. I consider myself as sports enthusiast involved competitively and leisurely. I dedicate my time between work, family and sports on daily basis. The sports I have been doing are Athletics (distance running, Mid distance(3k,5k,10k) , Endurance cycling, Table tennis and basketball This site is dedicated to the cycling blogs , my views and different ways where one can work with me on improving ones  fitness or sports performance.
        {/* There are many bike sayings about bike popularity and biking, but one of my favorites saying about biking is “Learn to ride a bike. You will not regret it if you live.”   */}
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
          {/* <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i> */}
          <a className="a" target="_blank" rel="noreferrer" href="https://wa.me/message/BYB5BY7ZYBV4C1">
          <i className="sidebarIcon fab fa-whatsapp-square fa-lg"></i>
          </a>
          <a className="a" target="_blank" rel="noreferrer" href="https://www.instagram.com/invites/contact/?i=my5v89ybqxw9&utm_content=kdf3qyz">
          <i className="sidebarIcon fab fa-instagram-square fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
