// import React from "react";

function UserInput() {
  return (
    <div className="flex items-center md:items-start gap-2">
      <label className="text-xl md:text-2xl w-48 md:w-[20rem] text-primary-dark">
        <input
          placeholder="SteamID"
          className="text-header-dark bg-primary-dark rounded-md focus:outline-none border border-header-dark focus:border-accent-dark focus:ring-1 focus:ring-header-dark w-full px-2 py-1"
        />
      </label>
      {/* <button
        type="button"
        className="bg-header-dark text-primary-dark border border-header-dark hover:text-accent-dark hover:border-accent-dark transition-colors duration-200 rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Find User
      </button> */}
      <button
        type="button"
        disabled
        className="bg-secondary-dark text-header-dark border border-header-dark rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Find User
      </button>
    </div>
  );
}

export default UserInput;
