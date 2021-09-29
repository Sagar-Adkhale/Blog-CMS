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
        Guts is bikepacking solution which intends to add to the culture of bike touring in Country. Our philosophy is very much aligned to the quote by Ernest Hemingway “It is by riding a bicycle that you learn the contours of a country best, since you have to sweat up the hills and coast down them.”
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
