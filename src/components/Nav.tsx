import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import goldenLogo from "../assets/goldenlogo.png";
import HamburgerMenu from "./Hamburger";
import CustomConnect from "./CustomConnect";

export function NavLink({
  to,
  children,
  external = false,
}: PropsWithChildren<{ to: string; external?: boolean }>) {
  const location = useLocation();
  const underline = location.pathname === to ? "underline text-secondary" : "";
  return (
    <Link
      to={to}
      className={`text-xl roboto ${underline}`}
      target={external ? "_blank" : "_parent"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <div className="bg-primary">
      <div className=" bg-primary p-2 hidden md:flex flex-row gap-12 pr-4 items-center">
        <a href="/">
          <div className="flex flex-row items-center gap-2">
            <img src={goldenLogo} alt="logo" />
          </div>
        </a>
        <div className="ml-auto">
          <NavLink to="/">Home</NavLink>
        </div>
        <NavLink to="/vault">Vault</NavLink>
        <NavLink
          external={true}
          to="https://app.balancer.fi/#/base/pool/0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020"
        >
          Earn
        </NavLink>
        <NavLink
          external={true}
          to="https://basescan.org/token/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
        >
          Etherscan
        </NavLink>
        <NavLink to="/learn">Humpychat</NavLink>
        <div className="">
          <CustomConnect />
        </div>
      </div>
      <div className="md:hidden flex flex-row justify-center items-center ">
        <div className="p-4">
          <a className="md:hidden flex " href="/">
            <div className="flex flex-row items-center gap-4">
              <img src={goldenLogo} alt="logo" />
            </div>
          </a>
        </div>
        <div className="ml-auto">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
export default Nav;
