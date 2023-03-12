import { useContext } from 'react';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
import { ColorContext } from '../context';

const Application = () => {
  const {
    state: { hexColor },
    dispatch,
  } = useContext(ColorContext);

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: 'update-hex-color',
            payload: { hexColor: e.target.value },
          })
        }
      />
      <AdjustColors hexColor={hexColor} dispatch={dispatch} />
      <RelatedColors hexColor={hexColor} dispatch={dispatch} />
      <SavedColors hexColor={hexColor} dispatch={dispatch} />
    </div>
  );
};

export default Application;
