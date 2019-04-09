const Color = require('color');
const { prefix, type, getFromMap } = require('../utils');

// This is just for our reference, they aren't pushed into the tokens
const namedColors = {
  alabaster: '#fafafa', // should be deprecated in favor of aquaHaze
  aluminum: '#999898',
  ashGray: '#b7b7b7',
  aquaHaze: '#f7fafa',
  black: '#010101',
  bunker: '#2d2d2d',
  carouselPink: '#fcecee',
  creamCan: '#f7ce69',
  deYork: '#6ebe7d',
  diamond: '#cff5ff',
  forest: '#1f5644',
  havelockBlue: '#5b90dc',
  hawkesBlue: '#e0ecfd',
  mercury: '#e4e4e4',
  mystic: '#daeae8',
  offYellow: '#fef7e7',
  persianGreen: '#00aaa5',
  red: '#fe4a49',
  slate: '#595858',
  stone: '#f1efef',
  sunglo: '#e36c68',
  white: '#fefefe',
  whiteIce: '#e8fbf0',
  winterWizard: '#9de0fc',
  zircon: '#dfdfe1',
};

const EMPHASIS = [
  {
    name: 'high',
    usage: 'Use for more prominent text',
    type: 'alpha',
    value: 0.87,
  },
  {
    name: 'medium',
    usage: 'Use for secondary text',
    type: 'alpha',
    value: 0.6,
  },
  {
    name: 'disabled',
    usage: 'Use for hints and things that are disabled',
    type: 'alpha',
    value: 0.38,
  },
];

const getEmphasis = getFromMap(EMPHASIS, v => (typeof v === 'number' ? v : undefined));

const colorWithEmphasis = (color, emphasis) =>
  `rgba(${Color(color)
    .rgb()
    .array()
    .join(', ')}, ${getEmphasis(emphasis)})`;

const themeColors = [
  {
    name: 'primary',
    value: namedColors.forest,
  },
  {
    name: 'secondary',
    value: namedColors.mystic,
  },
  {
    name: 'accent',
    value: namedColors.persianGreen,
  },
  {
    name: 'background',
    value: namedColors.white,
  },
  {
    name: 'surface',
    value: namedColors.aquaHaze,
  },
  {
    name: 'error',
    value: namedColors.red,
  },
  {
    name: 'disabled',
    value: namedColors.aluminum,
  },
  {
    name: 'on-primary',
    value: namedColors.white,
  },
  {
    name: 'on-secondary',
    value: namedColors.black,
  },
  {
    name: 'on-accent',
    value: namedColors.white,
  },
  {
    name: 'on-background',
    value: namedColors.black,
  },
  {
    name: 'on-surface',
    value: namedColors.forest,
  },
  {
    name: 'on-surface-light',
    value: namedColors.stone,
  },
  {
    name: 'on-error',
    value: namedColors.white,
  },
  {
    name: 'on-disabled',
    value: namedColors.white,
  },
].map(type('color'));

const textColors = [
  {
    dark: {
      primary: colorWithEmphasis(namedColors.bunker, 'high'),
      secondary: colorWithEmphasis(namedColors.slate, 'high'),
      hint: colorWithEmphasis(namedColors.bunker, 'disabled'),
      disabled: colorWithEmphasis(namedColors.bunker, 'disabled'),
      icon: colorWithEmphasis(namedColors.bunker, 'disabled'),
    },
  },
  {
    light: {
      primary: colorWithEmphasis('white', 1),
      secondary: colorWithEmphasis('white', 0.7),
      hint: colorWithEmphasis('white', 0.5),
      disabled: colorWithEmphasis('white', 0.5),
      icon: colorWithEmphasis('white', 0.5),
    },
  },
].reduce((acc, toneObj) => {
  const tone = Object.keys(toneObj)[0];
  Object.keys(toneObj[tone]).forEach(role => {
    acc[`text-${tone}-${role}`] = toneObj[tone][role];
  });
  return acc;
}, {});

const colors = [
  ...themeColors.reduce((acc, token) => [...acc, { ...token, name: `color-${token.name}` }], []),
  ...Object.keys(textColors).reduce(
    (acc, name) => [...acc, { name: `color-${name}`, type: 'color', value: textColors[name] }],
    []
  ),
];

module.exports = {
  colors,
  emphasis: EMPHASIS.map(prefix('emphasis')),
};
