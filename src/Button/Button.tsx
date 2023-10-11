import { FC } from "react";

type BattonProps = { text: number; onClick: () => void };

const Batton: FC<BattonProps> = ({ text, onClick }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        Clicked {text} times
      </button>
    </div>
  );
};
export default Batton;
