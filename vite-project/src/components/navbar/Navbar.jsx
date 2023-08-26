import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="container">
      <ul className="flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Clothers</a>
        </li>
        <li>
          <a href="#">Shoes</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
      </ul>
      <h1 className="logo">Shopping</h1>
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#000000", margin: "0,15px" }} />
        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#000000" }} />
      </div>
    </div>
  );
}

export default Navbar;
