import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
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
      <div className=" bg-primary p-2 hidden md:flex flex-row gap-12 ml-16 pr-4 items-center">
        <a href="/">
          <div className="flex flex-row items-center gap-2">
            <img src={logo} alt="logo" width={75} height={75} />
            <div className="small-pixel-7 text-6xl no-underline flex flex-row">
              <span className="text-secondary">GOLDEN </span>{" "}
              <span className="text-tertiary"> BOYS</span>
            </div>
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
      <div className="md:hidden flex justify-end mt-[2rem]">
        <HamburgerMenu />
      </div>
    </div>
  );
}
export default Nav;
