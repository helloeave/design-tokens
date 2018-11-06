const { family, weight, fontSizes, fonts, letterSpacing } = require('./fonts');
const { colors, emphasis } = require('./colors');
const { zlayers } = require('./elevation');
const { durations, timings } = require('./motion');

// Combine all the tokens together, and export
module.exports = [
  // Add in all the colors
  ...colors,
  ...fonts,
  ...family,
  ...weight,
  ...fontSizes,
  ...letterSpacing,
  ...durations,
  ...timings,
  // Add in the base z-layers
  ...zlayers,
  // Add in the different text emphasis tokens
  ...emphasis,
];
