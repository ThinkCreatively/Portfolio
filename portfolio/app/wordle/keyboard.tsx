import KeyRow from "./keyRow";

const KeyBoard = () => {
  const topLetters = [
    { val: "Q", selected: false },
    { val: "W", selected: false },
    { val: "E", selected: false },
    { val: "R", selected: false },
    { val: "T", selected: false },
    { val: "Y", selected: false },
    { val: "U", selected: false },
    { val: "I", selected: false },
    { val: "O", selected: false },
    { val: "P", selected: false },
  ];
  const midLetters = [
    { val: "A", selected: false },
    { val: "S", selected: false },
    { val: "D", selected: false },
    { val: "F", selected: false },
    { val: "G", selected: false },
    { val: "H", selected: false },
    { val: "J", selected: false },
    { val: "K", selected: false },
    { val: "L", selected: false },
  ];
  const botLetters = [
    { val: "Z", selected: false },
    { val: "X", selected: false },
    { val: "C", selected: false },
    { val: "V", selected: false },
    { val: "B", selected: false },
    { val: "N", selected: false },
    { val: "M", selected: false },
  ];

  return (
    <div
      className="flex flex-col rounded w-1/2 h-60 items-center"
      style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
    >
      <KeyRow letters={topLetters} />
      <KeyRow letters={midLetters} />
      <KeyRow letters={botLetters} />
    </div>
  );
};

export default KeyBoard;
