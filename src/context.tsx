import { Dispatch, PropsWithChildren, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './color-reducer';
import { createContext } from './create-context';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

export const [useColorContext, ContextProvider] =
  createContext<ColorContextState>();

export const useCustomContext = useColorContext;

// custom abstractions to consider
// const useHexColor = () => {
//     const {hexColor} = useColorContext();
//     return hexColor;
// }

// const useDispatch = () => {
//     const {dispatch} = useColorContext();
//     return dispatch;
// }

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
