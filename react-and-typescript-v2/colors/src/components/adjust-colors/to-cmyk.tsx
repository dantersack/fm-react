import { hex } from 'color-convert';
import { Dispatch } from 'react';
import { CMYKColor, UpdateColorActions } from '../../color-reducer';
import LabeledInput from '../shared/labeled-input';

type HexToCMYKProps = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

const HexToCMYK = ({ hexColor, dispatch }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  const handleOnChange = (index: 0 | 1 | 2 | 3, value: number): void => {
    const newColor: CMYKColor = [...color];
    newColor[index] = value;
    dispatch({
      type: 'update-cmyk-color',
      payload: {
        cmykColor: newColor,
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) => handleOnChange(0, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) => handleOnChange(1, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) => handleOnChange(2, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) => handleOnChange(3, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToCMYK;
