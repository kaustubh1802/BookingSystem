import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
 return (
  <div>
   <div className="navbar">
    <div className="navContainer">
     <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <spam className="logo">Raptor</spam>
     </Link>
     <div className="navItems">
      <button className="navButton">Register</button>
      <button className="navButton">Login</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Navbar;
