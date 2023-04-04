import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

interface Props {
  type: string;
  title: string;
  customStyles: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = (props: Props) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
