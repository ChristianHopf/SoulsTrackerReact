// import React from "react";
import AchievementSort from "./AchievementSort";
import AchievementItem from "./AchievementItem";

function Achievements() {
  return (
    // {{#if @achievements}}
    <div
      data-test-achievements
      className="flex flex-col lg:w-full lg:max-w-xl bg-header-dark rounded-md drop-shadow-md px-4 py-2 gap-4 mx-3 md:mx-0"
    >
      <div className="flex flex-row justify-between items-baseline">
        <h1 className="text-4xl text-primary-dark">Achievements</h1>
        <AchievementSort />
      </div>
      <ul className="flex flex-col gap-4">
        <AchievementItem />
      </ul>
    </div>
  );
}

export default Achievements;
