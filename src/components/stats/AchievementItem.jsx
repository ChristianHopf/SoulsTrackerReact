// import React from "react";

function AchievementItem({ achievement }) {
  const unlockDate = new Date(achievement.unlocktime * 1000).toDateString();
  console.log("rerender achievement item");

  return (
    <li className="flex flex-row gap-2 items-start md:items-center">
      <img
        src={achievement.icon}
        alt="Achievement Icon"
        width={64}
        className="border-2 border-accent-dark rounded-md"
      />
      <div className="flex flex-col w-full justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl text-primary-dark leading-none">
            {achievement.name}
          </h1>
          <p data-test-description className="text-secondary-dark ps-0.5">
            {achievement.description}
          </p>
        </div>
        <div className="flex flex-row justify-between ps-0.5">
          <p data-test-date className="text-secondary-dark text-sm">
            Achieved on:&nbsp;
            <span className="text-accent-dark">{unlockDate}</span>
          </p>
          <p className="text-secondary-dark">
            Rarity:&nbsp;
            <span className="text-accent-dark">{achievement.rarity}%</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default AchievementItem;
