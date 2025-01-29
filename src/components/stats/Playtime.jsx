import { useSelector } from "react-redux";

function Playtime() {
  const playtime = useSelector((state) => state.playtime.value);

  if (playtime) {
    return (
      <div
        data-test-playtime
        className="flex flex-col bg-header-dark rounded-md drop-shadow-md px-4 py-2 gap-2 mx-3 md:mx-0"
      >
        <h1 className="text-4xl text-primary-dark">Playtime</h1>
        <div className="mb-8">
          <div className="flex flex-row items-baseline">
            <p className="text-2xl md:text-3xl text-accent-dark">
              {playtime.playtime_forever}
            </p>
            <p
              data-test-lifetime
              className="text-2xl md:text-3xl text-secondary-dark"
            >
              &nbsp;hours played (lifetime)
            </p>
          </div>
          <div className="flex flex-row items-baseline">
            <p className="text-2xl md:text-3xl text-accent-dark">
              {playtime.playtime_2weeks}
            </p>
            <p
              data-test-2weeks
              className="text-2xl md:text-3xl text-secondary-dark"
            >
              &nbsp;hours played (last two weeks)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Playtime;
