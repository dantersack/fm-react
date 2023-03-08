import { hex } from 'color-convert';
import { Dispatch } from 'react';
import { RGBColor, UpdateColorActions } from '../../color-reducer';
import LabeledInput from '../shared/labeled-input';

type HexToHSLProps = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const handleOnChange = (index: 0 | 1 | 2, value: number): void => {
    const newColor: RGBColor = [...color];
    newColor[index] = value;
    dispatch({
      type: 'update-hsl-color',
      payload: {
        hslColor: newColor,
      },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => handleOnChange(0, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => handleOnChange(1, e.target.valueAsNumber)}
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) => handleOnChange(2, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToHSL;
