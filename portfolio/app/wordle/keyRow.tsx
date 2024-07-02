interface KeyRowProps {
  letters: {
    val: string;
    selected: boolean;
  }[];
}

const KeyRow = ({ letters }: KeyRowProps) => {
  return (
    <div className="flex justify-center w-full h-1/3">
      {letters.map((el) => {
        return (
          <div
            key="el"
            className={`flex m-2 w-14 justify-center items-center text-emerald-500 rounded ${
              el.selected ? "bg-red-950" : "bg-red-500"
            }`}
            style={{ backgroundColor: "rgba(20, 100, 45, .5)" }}
            onClick={(e) => {
              e.preventDefault();
              el.selected = true;
            }}
          >
            {el.val}
          </div>
        );
      })}
    </div>
  );
};

export default KeyRow;
