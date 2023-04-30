import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#f0f8ff",
          "#faebd7",
          "#00ffff",
          "#7fffd4",
          "#00ffff",
          "#00008b",
          "#fff8dc",
          "#ff7f50",
          "#d2691e",
          "#dc143c",
          "#9932cc",
          "#ff1493	",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
