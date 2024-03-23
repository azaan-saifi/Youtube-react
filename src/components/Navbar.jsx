import React from "react";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="bg-black flex items-center justify-between px-4 py-4">
      <Link to={'/'} className="logo">
        <img src={logo} alt="logo" className="media500:w-12 w-9" />
      </Link> 
      <SearchBar />
    </div>
  );
}

export default Navbar;
