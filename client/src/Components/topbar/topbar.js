import "./topbar.css";
import  Profile from "../abc/Profile.jpeg";
import { Link } from "react-router-dom";

const topbar = () => {
    const user = true;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            
            {
            user?
            (<img className="topImg" src={Profile} alt="Profile" />)
            :<ul className="topList">
                <li className="topListItem">
                    <Link to="/login" className="link">LOGIN</Link>
                </li>
                <li className="topListItem">
                    <Link to="/register" className="link">REGISTER</Link>
                </li>
            </ul>}
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default topbar