const Color = require('color');
const { prefix, type, getFromMap } = require('../utils');

// This is just for our reference, they aren't pushed into the tokens
const namedColors = {
  alabaster: '#fafafa', // should be deprecated in favor of aquaHaze
  aluminum: '#999898',
  aquaHaze: '#f7fafa',
  ashGray: '#b7b7b7',
  black: '#010101',
  bunker: '#2d2d2d',
  carouselPink: '#fcecee',
  creamCan: '#f7ce69',
  darkBlue: '#273653',
  darkGrey: '#8e929c',
  link: '#0a87d8',
  linkHover: '#18a0f8',
  deYork: '#6ebe7d',
  diamond: '#cff5ff',
  electricBlue: '#46b6ff',
  error: '#c13131',
  forest: '#1f5644',
  havelockBlue: '#5b90dc',
  hawkesBlue: '#e0ecfd',
  lightGrey: '#f5f6f9',
  mercury: '#e4e4e4',
  mystic: '#daeae8',
  offYellow: '#fef7e7',
  onahau: '#c6e8ff',
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
    value: namedColors.darkBlue,
  },
  {
    name: 'secondary',
    value: namedColors.onahau,
  },
  {
    name: 'accent',
    value: namedColors.electricBlue,
  },
  {
    name: 'background',
    value: namedColors.white,
  },
  {
    name: 'background-dark',
    value: namedColors.lightGrey,
  },
  {
    name: 'link',
    value: namedColors.link,
  },
  {
    name: 'link-hover',
    value: namedColors.linkHover,
  },
  {
    name: 'surface',
    value: namedColors.white,
  },
  {
    name: 'button-primary',
    value: namedColors.electricBlue,
  },
  {
    name: 'error',
    value: namedColors.error,
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
      primary: colorWithEmphasis(namedColors.darkGrey, 1),
      secondary: colorWithEmphasis(namedColors.slate, 'high'),
      hint: colorWithEmphasis(namedColors.darkGrey, 'disabled'),
      disabled: colorWithEmphasis(namedColors.darkGrey, 'disabled'),
      icon: colorWithEmphasis(namedColors.darkGrey, 'disabled'),
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
