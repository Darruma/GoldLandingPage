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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/swap">Buy</NavLink>
        <NavLink to="/stake">Swap</NavLink>
        <NavLink to="/learn">Learn</NavLink>
      </div>
    </div>
  );
}
export default Nav;
