import { useState } from "react";

function AchievementSort() {
  const [hidden, setHidden] = useState(true);

  const toggleSortDropdown = () => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div className="relative text-right w-36">
      <button
        type="button"
        className="text-primary-dark text-xl hover:text-accent-dark"
        onClick={toggleSortDropdown}
      >
        Sort
      </button>
      <div
        className={`${
          hidden ? "hidden" : ""
        } absolute bg-accent-dark text-header-dark text-left w-full flex flex-col rounded-md px-2 py-1`}
        role="menu"
      >
        {/* look into turning this into something like a radio group, handling active class might be easier */}
        <div className="flex flex-col gap-2 items-start">
          <button
            type="button"
            className="text-sm {{if this.activeDateNewSort 'font-semibold' ''}}"
            // {{on "click" (fn this.sortAchievements "date-new")}}
          >
            Date (new)
          </button>
          <button
            type="button"
            className="text-sm {{if this.activeDateOldSort 'font-semibold' ''}}"
            // {{on "click" (fn this.sortAchievements "date-old")}}
          >
            Date (old)
          </button>
          <button
            type="button"
            className="text-sm {{if this.activeRarityMostSort 'font-semibold' ''}}"
            // {{on "click" (fn this.sortAchievements "rarity-most")}}
          >
            Rarity (most rare)
          </button>
          <button
            type="button"
            className="text-sm {{if this.activeRarityLeastSort 'font-semibold' ''}}"
            // {{on "click" (fn this.sortAchievements "rarity-least")}}
          >
            Rarity (least rare)
          </button>
        </div>
      </div>
    </div>
  );
}

export default AchievementSort;
