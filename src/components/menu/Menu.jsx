import "./menu.scss";
import { menuLinks } from "../../data";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <aside className={`${menuOpen ? "menu active" : "menu"}`}>
      <ul>
        {menuLinks.map((item) => {
          const { id, text, link } = item;
          return (
            <li key={id}>
              <a href={link} onClick={() => setMenuOpen(false)}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Menu;
