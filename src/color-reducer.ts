import { rgb } from 'color-convert';

// consider reducer when using more than two pieces of state

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type updateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] };
};

type ColorState = {
  hexColor: string;
  //could add further values here
};

export type AdjustColorActions = UpdateHexColorAction | updateRGBColorAction;

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor }; // could add say rgb here
  }

  return state;
};
