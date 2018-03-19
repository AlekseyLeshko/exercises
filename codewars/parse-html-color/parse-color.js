import PRESET_COLORS from './colors';

const getHex = (str) => {
  if (isHex(str)) {
    return str;
  }

  if (isName(str)) {
    return PRESET_COLORS[str.toLowerCase()];
  }

  if (isSmallHex(str)) {
    return str
      .split('')
      .map((c, index) =>
        index > 0 ? c + c : c)
      .join('');
  }
}

export default (str) => {
  const hex = getHex(str);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export const isHex = (color) => /^#[0-9A-F]{6}$/i.test(color);
export const isSmallHex = (color) => /^#[0-9A-F]{3}$/i.test(color);
export const isName = (color) => /^[a-zA-z]+$/i.test(color);
