import "./topbar.scss";
import { MdPerson, MdMail } from "react-icons/md";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`${menuOpen ? "topbar active" : "topbar"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mo.
          </a>
          <div className="item-container">
            <MdPerson className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="item-container">
            <MdMail className="icon" />
            <span>mo@example.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
