import { proxy } from "valtio";
import { Color } from "react-color";

export interface State {
  [key: string]: any;
  intro: boolean;
  color: Color;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
}

const state: State = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
