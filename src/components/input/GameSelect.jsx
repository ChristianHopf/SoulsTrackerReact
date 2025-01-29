import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TipGames from "../layout/TipGames";
import { fetchStats } from "../../utils/api";
import { setPlaytime } from "../../features/stats/playtimeSlice";
import { setBosses } from "../../features/stats/bossesSlice";
import { setAchievements } from "../../features/stats/achievementsSlice";

function GameSelect() {
  const user = useSelector((state) => state.user.value);
  const games = useSelector((state) => state.games.value);
  const dispatch = useDispatch();

  // Game appid, ex: 1245620 (Elden Ring), 570940 (Dark Souls Remastered)
  const [selectedGame, setSelectedGame] = useState();

  const handleSelectGame = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleGetStats = async () => {
    const data = await fetchStats(user.steamid, selectedGame);

    dispatch(setPlaytime(data.playtime));
    dispatch(setBosses(data.bosses));
    dispatch(setAchievements(data.achievements));
  };

  let getStatsButton;
  if (selectedGame) {
    getStatsButton = (
      <button
        type="button"
        className="bg-header-dark text-primary-dark border border-header-dark hover:text-accent-dark hover:border-accent-dark transition-colors duration-200 rounded-md px-2 md:px-4 py-1 md:py-2"
        onClick={handleGetStats}
      >
        Get Stats
      </button>
    );
  } else {
    getStatsButton = (
      <button
        type="button"
        disabled
        className="bg-secondary-dark text-header-dark border border-header-dark rounded-md px-2 md:px-4 py-1 md:py-2"
      >
        Get Stats
      </button>
    );
  }
  return (
    <div className="flex items-center md:items-start gap-2">
      <label className="text-xl md:text-2xl w-48 md:w-[20rem] text-primary-dark">
        <select
          name="ownedGames"
          id="ownedGames"
          className="text-header-dark bg-primary-dark rounded-md focus:outline-none border border-header-dark focus:border-accent-dark focus:ring-1 focus:ring-header-dark w-full px-1 py-1"
          onChange={handleSelectGame}
        >
          <option value="ignore">Select game</option>
          {games &&
            games.map((game) => (
              <option key={game.appid} value={game.appid}>{game.name}</option>
            ))}
        </select>
      </label>
      <TipGames />
      {getStatsButton}
    </div>
    // {{!-- {{else if this.user.userInfo}}
    //   <h1 class="text-5xl text-primary-dark">This user does not own any of the
    //     supported games.</h1> --}}
  );
}

export default GameSelect;
