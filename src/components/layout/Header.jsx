// import React from "react";

function Header() {
  return (
    <div className="w-full py-3 bg-header-dark drop-shadow-md">
      <header className="flex px-3 lg:px-0 justify-between max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-semibold text-accent-dark">
          SoulsTracker
        </h1>
        <button type="button" className="text-primary-dark">
          Dark
        </button>
      </header>
    </div>
  );
}

export default Header;
