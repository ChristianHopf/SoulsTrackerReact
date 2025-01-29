import { useState } from "react";
import { useSelector } from "react-redux";

function Bosses({bosses}) {
  // const bosses = useSelector((state) => state.bosses.value);

  const [hidden, setHidden] = useState(false);

  const togglePrevBosses = () => {
    setHidden((prevState) => !prevState);
  };

  if (bosses) {
    return (
      <div
        data-test-bosses
        className="flex flex-col bg-header-dark rounded-md drop-shadow-md px-4 py-2 gap-2 mx-3 md:mx-0"
      >
        {bosses.nextBoss && (
          <>
            <h1 className="text-4xl text-primary-dark">Bosses</h1>
            <div className="flex flex-col mb-8 gap-2">
              <p
                data-test-next-boss
                className="text-2xl md:text-3xl text-secondary-dark"
              >
                Next Boss:
                <span className="text-2xl md:text-3xl text-accent-dark">
                  {bosses.next_boss}
                </span>
              </p>
              <p
                data-test-recent-boss
                className="text-2xl md:text-3xl text-secondary-dark"
              >
                Recent Boss:
                <span className="text-2xl md:text-3xl text-accent-dark">
                  {bosses.recent_boss}
                </span>
              </p>
              <span>
                <button
                  type="button"
                  className="text-2xl md:text-3xl text-secondary-dark cursor-pointer"
                  onClick={togglePrevBosses}
                >
                  Previous bosses
                </button>
              </span>
              <div className={hidden ? "hidden" : ""}>
                {bosses.prev_bosses.map((boss) => (
                  <p className="text-2xl md:text-3xl text-accent-dark">
                    {boss}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}

        {!bosses.nextBoss && (
          <>
            <h1 className="text-4xl text-primary-dark">Bosses (complete)</h1>
            <div className="flex flex-col mb-8 gap-2">
              <p
                data-test-recent-boss
                className="text-2xl md:text-3xl text-secondary-dark"
              >
                Recent Boss:&nbsp;
                <span className="text-2xl md:text-3xl text-accent-dark">
                  {bosses.recent_boss}
                </span>
              </p>
              <span>
                <button
                  type="button"
                  className="text-2xl md:text-3xl text-secondary-dark cursor-pointer"
                  onClick={togglePrevBosses}
                >
                  Previous bosses
                </button>
              </span>
              <div className={hidden ? "hidden" : ""}>
                {bosses.prev_bosses.map((boss) => (
                  <p
                    key={boss}
                    className="text-2xl md:text-3xl text-accent-dark"
                  >
                    {boss}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Bosses;
