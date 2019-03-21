const { prefix, type, toRem, getFromMap } = require('../utils');

// family
// weight
// transform
// size
// lineHeight
// letterSpacing

const fontFamilies = {
  primary: '"Maison Neue", Helvetica, sans-serif',
  secondary: 'Galano, Verdana, sans-serif',
};
const fontFamily = family => fontFamilies[family];

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
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
    value: fontWeight('bold'),
  },
  {
    name: 'h5',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'h6',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'subtitle',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'body',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'body-small',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'body-tiny',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'button',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'button-large',
    usage: '',
    value: fontWeight('bold'),
  },
  {
    name: 'overline',
    usage: '',
    value: fontWeight('medium'),
  },
  {
    name: 'legal',
    usage: '',
    value: fontWeight('medium'),
  },
]
  .map(prefix('font-weight'))
  .map(type('font-weight'));

const fontSizes = [
  {
    name: 'h1',
    usage: '',
    value: toRem(48),
  },
  {
    name: 'h2',
    usage: '',
    value: toRem(36),
  },
  {
    name: 'h3',
    usage: '',
    value: toRem(24),
  },
  {
    name: 'h4',
    usage: '',
    value: toRem(20),
  },
  {
    name: 'h5',
    usage: '',
    value: toRem(16),
  },
  {
    name: 'h6',
    usage: '',
    value: toRem(12),
  },
  {
    name: 'subtitle',
    usage: '',
    value: toRem(18),
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
    name: 'body-tiny',
    usage: '',
    value: toRem(13),
  },
  {
    name: 'button-large',
    usage: '',
    value: toRem(20),
  },
  {
    name: 'button',
    usage: '',
    value: toRem(15),
  },
  {
    name: 'overline',
    usage: '',
    value: toRem(12),
  },
  {
    name: 'legal',
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
    name: 'body-tiny',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'button-large',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'button',
    usage: '',
    value: fontFamily('secondary'),
  },
  {
    name: 'overline',
    usage: '',
    value: fontFamily('primary'),
  },
  {
    name: 'legal',
    usage: '',
    value: fontFamily('primary'),
  },
]
  .map(prefix('font-family'))
  .map(type('font-family'));

const lineHeight = [
  {
    name: 'h1',
    usage: '',
    value: 1.2,
  },
  {
    name: 'h2',
    usage: '',
    value: 1.2,
  },
  {
    name: 'h3',
    usage: '',
    value: 1.2,
  },
  {
    name: 'h4',
    usage: '',
    value: 1.2,
  },
  {
    name: 'h5',
    usage: '',
    value: 1.2,
  },
  {
    name: 'h6',
    usage: '',
    value: 1.2,
  },
  {
    name: 'subtitle',
    usage: '',
    value: 1.2,
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: 1.2,
  },
  {
    name: 'body',
    usage: '',
    value: 1.2,
  },
  {
    name: 'body-small',
    usage: '',
    value: 1.2,
  },
  {
    name: 'body-tiny',
    usage: '',
    value: 1.2,
  },
  {
    name: 'button-large',
    usage: '',
    value: 1.2,
  },
  {
    name: 'button',
    usage: '',
    value: 1.2,
  },
  {
    name: 'caption',
    usage: '',
    value: 1.2,
  },
  {
    name: 'overline',
    usage: '',
    value: 1.2,
  },
  {
    name: 'legal',
    usage: '',
    value: 1.2,
  },
]
  .map(prefix('line-height'))
  .map(type('line-height'));


const letterSpacing = [
  {
    name: 'h1',
    usage: '',
    value: 'normal',
  },
  {
    name: 'h2',
    usage: '',
    value: 'normal',
  },
  {
    name: 'h3',
    usage: '',
    value: 'normal',
  },
  {
    name: 'h4',
    usage: '',
    value: 'normal',
  },
  {
    name: 'h5',
    usage: '',
    value: 'normal',
  },
  {
    name: 'h6',
    usage: '',
    value: 'normal',
  },
  {
    name: 'subtitle',
    usage: '',
    value: 'normal',
  },
  {
    name: 'subtitle-small',
    usage: '',
    value: 'normal',
  },
  {
    name: 'body',
    usage: '',
    value: 'normal',
  },
  {
    name: 'body-small',
    usage: '',
    value: 'normal',
  },
  {
    name: 'body-tiny',
    usage: '',
    value: 'normal',
  },
  {
    name: 'button-large',
    usage: '',
    value: 'normal',
  },
  {
    name: 'button',
    usage: '',
    value: 'normal',
  },
  {
    name: 'overline',
    usage: '',
    value: 'normal',
  },
  {
    name: 'legal',
    usage: '',
    value: 'normal',
  },
]
  .map(prefix('letter-spacing'))
  .map(type('letter-spacing'));

const getFamily = getFromMap(family);
const getSize = getFromMap(fontSizes);
const getLineHeight = getFromMap(lineHeight);
const getWeight = getFromMap(weight);

const font = ({ family, size, lineHeight, weight }) =>
  `${getWeight(weight)} ${getSize(size)} / ${getLineHeight(lineHeight)} ${getFamily(family)}`;

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
  'body-tiny',
  'button-large',
  'button',
  'overline',
  'legal',
].map(name => ({
  name: `font-${name}`,
  type: 'font',
  value: font({
    family: `font-family-${name}`,
    size: `font-size-${name}`,
    lineHeight: `line-height-${name}`,
    weight: `font-weight-${name}`,
  }),
}));

module.exports = {
  family,
  weight,
  fontSizes,
  fonts,
  letterSpacing,
  lineHeight,
};
