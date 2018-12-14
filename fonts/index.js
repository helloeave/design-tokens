const { prefix, type, toRem, getFromMap } = require('../utils');

// family
// weight
// transform
// size
// letterSpacing

const fontFamilies = {
  primary: '"Maison Neue", Helvetica, sans-serif',
  secondary: 'Galano, Verdana, sans-serif',
};
const fontFamily = family => fontFamilies[family];

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 600,
  bold: 700,
};
const fontWeight = weight => fontWeights[weight];
const weight = [
  // @todo expand these
  {
    name: 'h1',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'h2',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'h3',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'h4',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'h5',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'h6',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'subtitle',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'body',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'body-small',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'button',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'caption',
    usage: '',
    value: fontWeight('normal'),
  },
  {
    name: 'overline',
    usage: '',
    value: fontWeight('normal'),
  },
]
  .map(prefix('font-weight'))
  .map(type('font-weight'));

const fontSizes = [
  {
    name: 'h1',
    usage: '',
    value: toRem(90),
  },
  {
    name: 'h2',
    usage: '',
    value: toRem(52),
  },
  {
    name: 'h3',
    usage: '',
    value: toRem(36),
  },
  {
    name: 'h4',
    usage: '',
    value: toRem(34),
  },
  {
    name: 'h5',
    usage: '',
    value: toRem(24),
  },
  {
    name: 'h6',
    usage: '',
    value: toRem(20),
  },
  {
    name: 'subtitle',
    usage: '',
    value: toRem(16),
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: toRem(14),
  },
  {
    name: 'body',
    usage: '',
    value: toRem(16),
  },
  {
    name: 'body-small',
    usage: '',
    value: toRem(14),
  },
  {
    name: 'button',
    usage: '',
    value: toRem(14),
  },
  {
    name: 'caption',
    usage: '',
    value: toRem(12),
  },
  {
    name: 'overline',
    usage: '',
    value: toRem(10),
  },
]
  .map(prefix('font-size'))
  .map(type('font-size'));

const family = [
  {
    name: 'h1',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'h2',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'h3',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'h4',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'h5',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'h6',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'subtitle',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'body',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'body-small',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'button',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'caption',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'overline',
    usage: '',
    value: fontFamily('primary'),
  },
]
  .map(prefix('font-family'))
  .map(type('font-family'));

const letterSpacing = [
  {
    name: 'h1',
    usage: '',
    value: toRem(-1.5),
  },
  {
    name: 'h2',
    usage: '',
    value: toRem(-0.5),
  },
  {
    name: 'h3',
    usage: '',
    value: toRem(0),
  },
  {
    name: 'h4',
    usage: '',
    value: toRem(0.25),
  },
  {
    name: 'h5',
    usage: '',
    value: toRem(0),
  },
  {
    name: 'h6',
    usage: '',
    value: toRem(0.15),
  },
  {
    name: 'subtitle',
    usage: '',
    value: toRem(0.15),
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: toRem(0.1),
  },
  {
    name: 'body',
    usage: '',
    value: toRem(0.5),
  },
  {
    name: 'body-small',
    usage: '',
    value: toRem(0.25),
  },
  {
    name: 'button',
    usage: '',
    value: toRem(1.25),
  },
  {
    name: 'caption',
    usage: '',
    value: toRem(0.4),
  },
  {
    name: 'overline',
    usage: '',
    value: toRem(1.5),
  },
]
  .map(prefix('letter-spacing'))
  .map(type('letter-spacing'));

const getFamily = getFromMap(family);
const getSize = getFromMap(fontSizes);
const getWeight = getFromMap(weight);

const font = ({ family, size, weight }) =>
  `${getWeight(weight)} ${getSize(size)} / 1.2 ${getFamily(family)}`;
const fonts = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle',
  'subtitle-small',
  'body',
  'body-small',
  'button',
  'caption',
  'overline',
].map(name => ({
  name: `font-${name}`,
  type: 'font',
  value: font({
    family: `font-family-${name}`,
    size: `font-size-${name}`,
    weight: `font-weight-${name}`,
  }),
}));

module.exports = {
  family,
  weight,
  fontSizes,
  fonts,
  letterSpacing,
};
