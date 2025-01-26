// import React from "react";

function GameSelect() {
  return (
    <div className="flex items-center md:items-start gap-2">
      <label className="text-xl md:text-2xl w-48 md:w-[20rem] text-primary-dark">
        <select
          name="ownedGames"
          id="ownedGames"
          className="text-header-dark bg-primary-dark rounded-md focus:outline-none border border-header-dark focus:border-accent-dark focus:ring-1 focus:ring-header-dark w-full px-1 py-1"
        >
          <option value="ignore">Select game</option>
          <option value={"elden-ring"}>Elden Ring</option>
        </select>
      </label>
      {/* <TipGames /> */}
      <button
        type="button"
        className="bg-header-dark text-primary-dark border border-header-dark hover:text-accent-dark hover:border-accent-dark transition-colors duration-200 rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Get Stats
      </button>
      {/* <button
        type="button"
        disabled
        className="bg-secondary-dark text-header-dark border border-header-dark rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Get Stats
      </button> */}
    </div>
    // {{!-- {{else if this.user.userInfo}}
    //   <h1 class="text-5xl text-primary-dark">This user does not own any of the
    //     supported games.</h1> --}}
  );
}

export default GameSelect;
