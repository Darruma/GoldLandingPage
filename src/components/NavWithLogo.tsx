import Nav, { NavLink } from "./Nav";
import logo from "../assets/logo.png";

function NavWithLogo() {
  return (
    <>
      <Nav />
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="z-10 mt-[-4rem] md:hidden mx-auto w-[100px] "
        />
      </NavLink>
    </>
  );
}

export default NavWithLogo;
