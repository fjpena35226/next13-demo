import hsl from "hsl-to-hex";

const getHashOfString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // tslint:disable-next-line: no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  return hash;
};

const normalizeHash = (hash: number, min: number, max: number) => {
  return Math.floor((hash % (max - min)) + min);
};

const generateHSL = (
  name: string,
  saturationRange: number[],
  lightnessRange: number[]
) => {
  const hash = getHashOfString(name);
  const h = normalizeHash(hash, 0, 360);
  const s = normalizeHash(hash, saturationRange[0], saturationRange[1]);
  const l = normalizeHash(hash, lightnessRange[0], lightnessRange[1]);
  return { h, s, l };
};

const getRange = (value: number, range: number) => {
  return [Math.max(0, value - range), Math.min(value + range, 100)];
};

export const generateColor = (id: string) => {
  const saturationRange = getRange(50, 10);
  const lightnessRange = getRange(40, 10);

  const { h, s, l } = generateHSL(id, saturationRange, lightnessRange);
  return hsl(h, s, l);
};
