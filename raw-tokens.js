const Color = require('color');

// This is just for our reference, they aren't pushed into the tokens
const namedColors = {
  alabaster: '#fafafa',
  aluminum: '#999898',
  ashGray: '#b7b7b7',
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
  red: '#b00020',
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

// How long things should last
const durations = [
  {
    name: 'simple-small',
    type: 'time',
    usage: 'For things like switches, control boxes, etc...',
    value: '0.1s',
  },
  {
    name: 'simple-small-enter',
    type: 'time',
    usage: 'For small dialogs, alerts, etc...',
    value: '.15s',
  },
  {
    name: 'simple-small-exit',
    type: 'time',
    usage: 'For small dialogs, alerts, etc...',
    value: '0.075s',
  },
  {
    name: 'simple-medium',
    type: 'time',
    usage: 'For card transforms, etc...',
    value: '0.225s',
  },
  {
    name: 'simple-medium-enter',
    type: 'time',
    usage: 'For card transforms, etc...',
    value: '0.25s',
  },
  {
    name: 'simple-medium-exit',
    type: 'time',
    usage: 'For card transforms, etc...',
    value: '0.2s',
  },
  {
    name: 'simple-large',
    type: 'time',
    usage: 'For page transforms, etc...',
    value: '0.275s',
  },
  {
    name: 'simple-large-enter',
    type: 'time',
    usage: 'For card transforms, etc...',
    value: '0.3s',
  },
  {
    name: 'simple-large-exit',
    type: 'time',
    usage: 'For card transforms, etc...',
    value: '0.25s',
  },
].map(token => ({ ...token, name: `duration-${token.name}` }));

// Timing functions for animations and transitions
const timings = [
  {
    name: 'decelerate',
    type: 'timing function',
    value: 'cubic-bezier(0, 0, .2, 1)',
  },
  {
    name: 'accelerate',
    type: 'timing function',
    value: 'cubic-bezier(.4, 0, 1, 1)',
  },
  {
    name: 'standard',
    type: 'timing function',
    value: 'cubic-bezier(.4, 0, .2, 1)',
  },
  {
    name: 'sharp',
    type: 'timing function',
    value: 'cubic-bezier(.4, 0, .6, 1)',
  },
].map(token => ({ ...token, name: `timing-curve-${token.name}` }));

const tokens = [
  // Add in all the colors
  ...colors,
  ...durations,
  ...timings,
  // Add in the base z-layers
  ...zlayers,
  // Add in the different text emphasis tokens
  ...EMPHASIS.map(token => ({ ...token, name: `emphasis-${token.name}` })),
];

module.exports = tokens;
