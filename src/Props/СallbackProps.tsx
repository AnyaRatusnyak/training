import { FC } from "react";

type BtnProps = {
  onClick: (val: string) => void;
};

const Btn: FC<BtnProps> = (props) => (
  <button
    type="button"
    className="btn btn-primary"
    onClick={() => props.onClick("Hello!")}
  >
    Click me
  </button>
);
export default Btn;
