import Nav from "./Nav";
import logo from "../assets/logo.png";

function NavWithLogo() {
  return (
    <>
      <Nav />
      <img
        src={logo}
        alt="logo"
        className="z-10 mt-[-4rem] md:hidden mx-auto w-[100px] "
      />
    </>
  );
}

export default NavWithLogo;
