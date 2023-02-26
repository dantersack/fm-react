import { rgb } from 'color-convert';

export type UpdateHexColor = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type RGBColor = [number, number, number];

export type UpdateRGBColor = {
  type: 'update-rgb-color';
  payload: {
    rgbColor: RGBColor;
  };
};

export type UpdateColorActions = UpdateHexColor | UpdateRGBColor;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: UpdateHexColor | UpdateRGBColor,
): ColorState => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const { rgbColor } = action.payload;
    return { ...state, hexColor: '#' + rgb.hex(rgbColor) };
  }

  return state;
};
