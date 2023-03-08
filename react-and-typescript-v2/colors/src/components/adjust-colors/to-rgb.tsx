import { Dispatch } from 'react';
import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { RGBColor, UpdateColorActions } from '../../color-reducer';

type HexToRGBProps = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const handleOnChange = (index: 0 | 1 | 2, value: number): void => {
    const newColor: RGBColor = [...color];
    newColor[index] = value;
    dispatch({
      type: 'update-rgb-color',
      payload: {
        rgbColor: newColor,
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => handleOnChange(0, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => handleOnChange(1, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => handleOnChange(2, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToRGB;
