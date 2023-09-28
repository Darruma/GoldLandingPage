import { useState } from "react";
import menu from "../assets/menu.png";
import { NavLink } from "./Nav";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pr-4">
      <img
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        src={menu}
        alt="menu"
        className="h-10 w-10"
      />
      {isOpen && <Menu close={() => setIsOpen(false)} />}
    </div>
  );
}

function Menu({ close }: { close: () => void }) {
  return (
    <div className={` bg-black w-full h-screen fixed top-0 left-0 p-4 z-50`}>
      <div className="flex justify-end">
        <button onClick={close} className="text-white">
          <img src={menu} alt="menu" className="h-10 w-10" />
        </button>
      </div>
      <ul className="text-white">
        <li className="mb-4">
          <NavLink to="/why">Why</NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            external={true}
            to="https://app.balancer.fi/#/base/swap/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4"
          >
            Buy
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            external={true}
            to="https://app.balancer.fi/#/base/pool/0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020"
          >
            Stake
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            external={true}
            to="https://app.balancer.fi/#/base/pool/0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047"
          >
            LP
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/learn">Learn</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
