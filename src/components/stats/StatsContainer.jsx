import React from "react";
import Playtime from "./Playtime";
import Bosses from "./Bosses";
import Achievements from "./Achievements";

function StatsContainer() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col w-full gap-4">
        <Playtime />
        <Bosses />
      </div>
      <Achievements />
    </div>
  );
}

export default StatsContainer;
