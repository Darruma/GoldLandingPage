import Nav, { NavLink } from "./Nav";
import logo from "../assets/logo.png";

function NavWithLogo() {
  return (
    <>
      <Nav />
      <NavLink to="/"></NavLink>
    </>
  );
}

export default NavWithLogo;
