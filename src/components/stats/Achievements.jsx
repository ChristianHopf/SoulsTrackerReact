import { useSelector } from "react-redux";
import AchievementSort from "./AchievementSort";
import AchievementItem from "./AchievementItem";

function Achievements() {
  const achievements = useSelector((state) => state.achievements.value);
  if (achievements) {
    return (
      <div
        data-test-achievements
        className="flex flex-col lg:w-full lg:max-w-xl bg-header-dark rounded-md drop-shadow-md px-4 py-2 gap-4 mx-3 md:mx-0"
      >
        <div className="flex flex-row justify-between items-baseline">
          <h1 className="text-4xl text-primary-dark">Achievements</h1>
          <AchievementSort />
        </div>
        <ul className="flex flex-col gap-4">
          {achievements.map((achievement, index) => (
            <AchievementItem key={`ach-${index}`} achievement={achievement} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Achievements;
