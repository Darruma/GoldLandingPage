import { useState } from 'react';
import menu from '../assets/menu.png';
import { NavLink } from './Nav';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
    <div className={`bg-black w-full h-screen fixed top-0 left-0 p-4 z-50`}>
      <div className="flex justify-end">
        <button onClick={close} className="text-white">
          <img src={menu} alt="menu" className="h-10 w-10" />
        </button>
      </div>
      <ul className="text-white">
        <li className="mb-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/vaults/aura">AURA vault</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/vaults/comp">COMP vault</NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            external={true}
            to="https://app.balancer.fi/#/base/pool/0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020"
          >
            Earn
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink external={true} to="https://basescan.org/token/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4">
            Etherscan
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/asd">Humpy</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
