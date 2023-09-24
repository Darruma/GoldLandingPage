import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavLink({ to, children }: PropsWithChildren<{ to: string }>) {
  return (
    <Link to={to} className="font-bold text-2xl roboto">
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <div>
      <div className="bg-black h-20"></div>
      <div className="p-2"></div>
      <div className="bg-black p-1 hidden md:flex"></div>
      <div className="p-2 hidden md:flex flex-row gap-4 ml-16">
        <img src={logo} alt="logo" className="h-50 z-10 mt-[-4rem]" />
        <NavLink to="why">Why</NavLink>
        <NavLink to="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4">
          Buy
        </NavLink>
        <NavLink to="https://app.balancer.fi/#/base/pool/0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047">
          Swap
        </NavLink>
        <NavLink to="learn">Learn</NavLink>
      </div>
    </div>
  );
}
export default Nav;
