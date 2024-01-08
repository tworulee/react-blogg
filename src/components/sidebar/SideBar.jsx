import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="https://images.ladbible.com/resize?type=webp&quality=70&width=720&fit=contain&gravity=null&url=https://s3-images.ladbible.com/s3/content/bea72840602ecfce51f2d52bf0a7bd8e.png"
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          Life
        </li>
        <li className="sidebarListItem">
         Music
        </li>
        <li className="sidebarListItem">
          Style
        </li>
        <li className="sidebarListItem">
          Sport
        </li>
        <li className="sidebarListItem">
          Tech
        </li>
        <li className="sidebarListItem">
          Cinema
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  )
}
