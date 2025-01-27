// import React from "react";

function TipSteamid() {
  return (
    <div className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="text-accent-dark icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
      </svg>
      <div className="hidden group-hover:block absolute text-primary-dark bg-header-dark rounded-md px-2 py-1">
        Your
        <span className="text-accent-dark">SteamID</span>
        is the 17-digit number at the end of your profile URL. For example:
        https://steamcommunity.com/profiles/
        <span className="text-accent-dark">76561198099631791</span>
      </div>
    </div>
  );
}

export default TipSteamid;
