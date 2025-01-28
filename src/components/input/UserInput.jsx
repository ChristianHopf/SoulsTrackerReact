import { useState, useEffect } from "react";
import { fetchUserAndGames } from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../features/stats/userSlice";
import { setGames } from "../../features/stats/gamesSlice";

function UserInput() {
  // const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [steamidInput, setSteamidInput] = useState("");

  const handleChangeInput = (event) => {
    setSteamidInput(event.target.value);
  };

  const handleFindUser = async () => {
    const data = await fetchUserAndGames(steamidInput);
    console.log(data);
    dispatch(setUser(data.userInfo));
    dispatch(setGames(data.gamesInfo));
    // setSteamidInput("");
  };

  let findUserButton;
  if (steamidInput != "") {
    findUserButton = (
      <button
        type="button"
        className="bg-header-dark text-primary-dark border border-header-dark hover:text-accent-dark hover:border-accent-dark transition-colors duration-200 rounded-md px-2 md:px-4 py-1 md:py-2"
        onClick={handleFindUser}
      >
        Find User
      </button>
    );
  } else {
    findUserButton = (
      <button
        type="button"
        disabled
        className="bg-secondary-dark text-header-dark border border-header-dark rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Find User
      </button>
    );
  }

  return (
    <div className="flex items-center md:items-start gap-2">
      <label className="text-xl md:text-2xl w-48 md:w-[20rem] text-primary-dark">
        <input
          onChange={handleChangeInput}
          placeholder="SteamID"
          className="text-header-dark bg-primary-dark rounded-md focus:outline-none border border-header-dark focus:border-accent-dark focus:ring-1 focus:ring-header-dark w-full px-2 py-1"
        />
      </label>
      {findUserButton}
    </div>
  );
}

export default UserInput;
