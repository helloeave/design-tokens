const { prefix, type } = require('./utils');
const { family, weight, fontSizes } = require('./fonts');
const { colors, emphasis } = require('./colors');
const { zlayers } = require('./elevation');
const { durations, timings } = require('./motion');

// Combine all the tokens together, and export
module.exports = [
  // Add in all the colors
  ...colors,
  ...family,
  ...weight,
  ...fontSizes,
  ...durations,
  ...timings,
  // Add in the base z-layers
  ...zlayers,
  // Add in the different text emphasis tokens
  ...emphasis,
];
