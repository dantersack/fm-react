import { hex } from 'color-convert';
import { Dispatch } from 'react';
import { RGBColor, UpdateColorActions } from '../../color-reducer';
import LabeledInput from '../shared/labeled-input';

type HexToHSVProps = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

const HexToHSV = ({ hexColor, dispatch }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  const handleOnChange = (index: 0 | 1 | 2, value: number): void => {
    const newColor: RGBColor = [...color];
    newColor[index] = value;
    dispatch({
      type: 'update-hsv-color',
      payload: {
        hsvColor: newColor,
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
        label="V"
        type="number"
        value={v}
        onChange={(e) => handleOnChange(2, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToHSV;
