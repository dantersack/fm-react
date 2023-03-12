import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import {
  colorReducer,
  ColorState,
  initialState,
  UpdateColorActions,
} from './color-reducer';

type ColorContextState = {
  state: ColorState;
  dispatch: Dispatch<UpdateColorActions>;
};

export const ColorContext = createContext({
  state: initialState,
} as ColorContextState);

const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
