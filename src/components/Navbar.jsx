import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex">
      <div className="object-contain">
        <img src="/images/nav-logo.svg" className="w-10 h-10" />
      </div>
      <div>
        <img src="/images/menu.svg" className="w-10 h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
