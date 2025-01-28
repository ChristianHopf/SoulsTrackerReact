import GameSelect from "./GameSelect";
import UserInput from "./UserInput";

function InputRow() {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:max-w-screen-lg mx-3 md:mx-0 lg:mx-auto lg:justify-between gap-4 pt-4 mb-6">
      <UserInput />
      <GameSelect />
    </div>
  );
}

export default InputRow;
