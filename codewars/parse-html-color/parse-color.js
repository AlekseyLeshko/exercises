import colors from './colors';

const PRESET_COLORS = {
  '#80ffA0': { r: 128, g: 255, b: 160 },
  '#33bb77': { r: 51,  g: 187, b: 119 },
  '#32cd32': { r: 50,  g: 205, b: 50  },
};

const table = {
  hex: {
    '#80ffa0': '#80ffA0',
    '#33bb77': '#33bb77',
    '#32cd32': '#32cd32',
  },
  smallHex: {
    '#80ffA0': '#80ffa0',
    '#3b7': '#33bb77',
    '#32cd32': '#32cd32',
  },
  name: colors,
};

export default (str) => PRESET_COLORS[table[getType(str)][str.toLowerCase()]];

export const getType = (color) => {
  if (isHex(color)) {
    return types.hex;
  }

  if (isSmallHex(color)) {
    return types.smallHex;
  }

  if (isName(color)) {
    return types.name;
  }
};

export const isHex = (color) => /^#[0-9A-F]{6}$/i.test(color);
export const isSmallHex = (color) => /^#[0-9A-F]{3}$/i.test(color);
export const isName = (color) => /^[a-zA-z]+$/i.test(color);

export const types = {
  hex: 'hex',
  smallHex: 'smallHex',
  name: 'name',
};
