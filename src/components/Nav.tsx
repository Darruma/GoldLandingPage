import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import HamburgerMenu from "./Hamburger";

export function NavLink({
  to,
  children,
  external = false,
}: PropsWithChildren<{ to: string; external?: boolean }>) {
  return (
    <Link
      to={to}
      className="font-bold text-2xl roboto"
      target={external ? "_blank" : "_parent"}
      rel={external ? "noopener noreferrer" : ""}
    >
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
      <div className="p-2 hidden md:flex flex-row gap-6 ml-16">
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-50 z-10 mt-[-4rem]" />
        </NavLink>

        <NavLink to="/why">Why</NavLink>
        <NavLink
          external={true}
          to="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
        >
          Buy
        </NavLink>
        <NavLink
          external={true}
          to="https://app.balancer.fi/#/base/pool/0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020"
        >
          Stake
        </NavLink>
        <NavLink
          external={true}
          to="https://app.balancer.fi/#/base/pool/0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047"
        >
          LP
        </NavLink>
        <NavLink to="/learn">Learn</NavLink>
      </div>
      <div className="md:hidden flex justify-end mt-[-4rem]">
        <HamburgerMenu />
      </div>
    </div>
  );
}
export default Nav;
