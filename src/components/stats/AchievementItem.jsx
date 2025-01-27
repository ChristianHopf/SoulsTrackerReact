// import React from "react";

function AchievementItem() {
  return (
    <li className="flex flex-row gap-2 items-center">
      <img
        src={"@achievement.icon"}
        alt="Achievement Icon"
        // {{! width="64" }}
        className="border-2 border-accent-dark rounded-md"
      />
      <div className="flex flex-col w-full justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl text-primary-dark leading-none">
            @achievement.name
          </h1>
          <p data-test-description className="text-secondary-dark ps-0.5">
            @achievement.description
          </p>
        </div>
        <div className="flex flex-row justify-between ps-0.5">
          <p data-test-date className="text-secondary-dark text-sm">
            Achieved on:
            <span className="text-accent-dark">unlockTimeDateString</span>
          </p>
          <p className="text-secondary-dark">
            Rarity:
            <span className="text-accent-dark">@achievement.rarity%</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default AchievementItem;
