import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="w-full h-20 flex justify-around items-center pt-10">
      {" "}
      <img src={logo} alt="" />
      <div className="text-white flex gap-8 mt-4 text-xl">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Discover</Link>
        <Link to="/">Place</Link>
      </div>
    </div>
  );
};

export default NavBar;
