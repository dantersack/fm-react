import { rgb, hsl, hsv, cmyk } from 'color-convert';

export type UpdateHexColor = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type RGBColor = [number, number, number];
export type CMYKColor = [number, number, number, number];

export type UpdateRGBColor = {
  type: 'update-rgb-color';
  payload: {
    rgbColor: RGBColor;
  };
};

export type UpdateHSLColor = {
  type: 'update-hsl-color';
  payload: {
    hslColor: RGBColor;
  };
};

export type UpdateHSVColor = {
  type: 'update-hsv-color';
  payload: {
    hsvColor: RGBColor;
  };
};

export type UpdateCMYKColor = {
  type: 'update-cmyk-color';
  payload: {
    cmykColor: CMYKColor;
  };
};

export type UpdateColorActions =
  | UpdateHexColor
  | UpdateRGBColor
  | UpdateHSLColor
  | UpdateHSVColor
  | UpdateCMYKColor;

export type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: UpdateColorActions,
): ColorState => {
  switch (action.type) {
    case 'update-hex-color': {
      const { hexColor } = action.payload;
      return { ...state, hexColor };
    }

    case 'update-rgb-color': {
      const { rgbColor } = action.payload;
      return { ...state, hexColor: '#' + rgb.hex(rgbColor) };
    }

    case 'update-hsl-color': {
      const { hslColor } = action.payload;
      return { ...state, hexColor: '#' + hsl.hex(hslColor) };
    }

    case 'update-hsv-color': {
      const { hsvColor } = action.payload;
      return { ...state, hexColor: '#' + hsv.hex(hsvColor) };
    }

    case 'update-cmyk-color': {
      const { cmykColor } = action.payload;
      return { ...state, hexColor: '#' + cmyk.hex(cmykColor) };
    }

    default: {
      return state;
    }
  }
};
