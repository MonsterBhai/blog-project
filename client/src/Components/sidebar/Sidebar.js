import "./Sidebar.css";
import Profile from "../abc/Zoro.jpg";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[]);
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={Profile} alt="img" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid est omnis impedit tempore a accusantium excepturi consectetur doloribus accusamus iure!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => {
            return <Link className="link" to={`/?cat=${cat.name}`}><li className="sidebarListItem">{cat.name}</li></Link>
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarIcon fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar