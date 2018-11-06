const Color = require('color');

const namedColors = {
  winterWizard: '#9de0fc',
  diamond: '#cff5ff',
  bunker: '#2d2d2d',
  aluminum: '#999898',
  ashGray: '#b7b7b7',
  zircon: '#dfdfe1',
  mercury: '#e4e4e4',
  stone: '#f1efef',
  alabaster: '#fafafa',
  white: '#fefefe',
  black: '#010101',
  sunglo: '#e36c68',
  carouselPink: '#fcecee',
  havelockBlue: '#5b90dc',
  hawkesBlue: '#e0ecfd',
  deYork: '#6ebe7d',
  whiteIce: '#e8fbf0',
  creamCan: '#f7ce69',
  offYellow: '#fef7e7',
  red: '#b00020',
  // NEW COLORS
  mystic: '#daeae8',
  forest: '#1f5644',
  persianGreen: '#00aaa5',
};

const EMPHASIS = [
  {
    name: 'high',
    value: 0.87,
  },
  {
    name: 'medium',
    value: 0.6,
  },
  {
    name: 'disabled',
    value: 0.38,
  },
];

const getFromMap = (map, primitive = v => undefined) => name => {
  for (let i = 0; i < map.length; i++) {
    if (map[i].name === name) {
      return map[i].value;
    }
  }

  if (primitive(name) !== undefined) {
    return primitive(name);
  }

  return null;
};

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
    value: namedColors.mercury,
  },
  {
    name: 'error',
    value: namedColors.red,
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
    value: namedColors.black,
  },
  {
    name: 'on-error',
    value: namedColors.white,
  },
].map(color => Object.assign({}, { type: 'color' }, color));

const textColors = [
  {
    dark: {
      primary: colorWithEmphasis('black', 'high'),
      secondary: colorWithEmphasis('black', 'medium'),
      hint: colorWithEmphasis('black', 'disabled'),
      disabled: colorWithEmphasis('black', 'disabled'),
      icon: colorWithEmphasis('black', 'disabled'),
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

const zlayers = [
  {
    name: 'hidden',
    usage: 'For items that should be on the page but not visible',
    type: 'integer',
    value: -1,
  },
  {
    name: 'default',
    usage: 'Used for setting a standard z-index',
    type: 'integer',
    value: 1,
  },
  {
    name: 'dropdown',
    usage: 'used for dropdowns',
    type: 'integer',
    value: 1000,
  },
  {
    name: 'overlay',
    usage:
      'Used for overlays and things that are supposed to mask the page so that other things above them can be afforded visual focus',
    type: 'integer',
    value: 5000,
  },
  {
    name: 'modal',
    usage: 'For popups and other modal elements with a high elevation',
    type: 'integer',
    value: 6000,
  },
].reduce((acc, token) => [...acc, { ...token, name: [`elevation-z-${token.name}`] }], []);

const tokens = [...colors, ...zlayers];

module.exports = tokens;
