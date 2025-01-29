import React from "react";
import Playtime from "./Playtime";
import Bosses from "./Bosses";
import Achievements from "./Achievements";
import { useSelector } from "react-redux";
import Unsupported from "./Unsupported";
// import Unsupported from "./Unsupported";

function StatsContainer() {
  const { data, loading, error } = useSelector((state) => state.stats);

  if (loading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-5xl text-accent-dark">Loading...</h1>
      </div>
    );
  } else if (error) {
    return <Unsupported />;
  } else if (data) {
    // console.log(data);
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
}

export default StatsContainer;
