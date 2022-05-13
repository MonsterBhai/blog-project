import "./Header.css";
import HeaderImg from "../abc/Header2.jpg";

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={HeaderImg} alt="headerImg" />
    </div>
  )
}

export default Header;