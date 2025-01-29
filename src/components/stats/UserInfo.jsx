// import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
  const user = useSelector((state) => state.user.value);

  if (user && Object.keys(user).length > 0) {
    return (
      <div data-test-user-info className="flex flex-row gap-4 mx-3 md:mx-0">
        <img
          src={user.avatarmedium}
          alt="avatar"
          width="96"
          className="border-2 border-accent-dark rounded-md"
        />
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-4xl md:text-5xl text-primary-dark">
            {user.personaname}
          </h1>
          <a
            href={`https://steamcommunity.com/profiles/${user.steamid}`}
            className="text-xl ml-1.5 text-accent-dark"
            target="_blank"
            rel="external nofollow noopener noreferrer"
          >
            View profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserInfo;
