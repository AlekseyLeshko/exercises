import { describe } from 'ava-spec';
import parseColor, {isHex, isShortHex, isName, types} from './parse-color';

describe('parse html color:', it => {
  it('should return color', t => {
    const expected = [
      { r: 128, g: 255, b: 160 },
      { r: 51,  g: 187, b: 119 },
      { r: 50,  g: 205, b: 50  },
    ];
    const colors = [
      '#80FFA0',
      '#3B7',
      'LimeGreen',
    ];

    colors.forEach((color, index) => t.deepEqual(parseColor(color), expected[index]));
  });

  it('should small hex', t => {
    const color = '#80FFA0';
    t.truthy(isHex(color));
  });

  it('should small hex', t => {
    const color = '#3B7';
    t.truthy(isShortHex(color));
  });

  it('should name', t => {
    const color = 'LimeGreen';
    t.truthy(isName(color));
  });
});

