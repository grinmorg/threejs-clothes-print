import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

interface Props {
  type: string;
  title: string;
  customStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ButtonStyle =
  | {
      backgroundColor: string;
      color: string;
    }
  | {
      borderWidth: string;
      borderColor: string;
      color: string;
    }
  | undefined;

const CustomButton = (props: Props) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string): ButtonStyle => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color as string,
        color: getContrastingColor(snap.color as string),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color as string,
        color: snap.color as string,
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
