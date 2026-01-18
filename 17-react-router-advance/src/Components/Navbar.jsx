import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 bg-[#7D2E68]">
      <h2 className="text-xl font-bold">Sheryians</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-semibold" to="/">
          Home
        </Link>
        <Link className="text-lg font-semibold" to="/about">
          About
        </Link>
        <Link className="text-lg font-semibold" to="/contact">
          Contact
        </Link>
        <Link className="text-lg font-semibold" to="/courses">
          Courses
        </Link>
        <Link className="text-lg font-semibold " to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
