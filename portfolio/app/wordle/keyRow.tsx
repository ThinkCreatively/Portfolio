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
            className="flex m-2 w-14 justify-center items-center bg-red-500"
          >
            {el.val}
          </div>
        );
      })}
    </div>
  );
};

export default KeyRow;
