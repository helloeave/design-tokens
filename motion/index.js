const { prefix, type } = require('../utils');

// How long things should last
const durations = [
  {
    name: 'simple-small',
    usage: 'For things like switches, control boxes, etc...',
    value: '0.1s',
  },
  {
    name: 'simple-small-enter',
    usage: 'For small dialogs, alerts, etc...',
    value: '.15s',
  },
  {
    name: 'simple-small-exit',
    usage: 'For small dialogs, alerts, etc...',
    value: '0.075s',
  },
  {
    name: 'simple-medium',
    usage: 'For card transforms, etc...',
    value: '0.225s',
  },
  {
    name: 'simple-medium-enter',
    usage: 'For card transforms, etc...',
    value: '0.25s',
  },
  {
    name: 'simple-medium-exit',
    usage: 'For card transforms, etc...',
    value: '0.2s',
  },
  {
    name: 'simple-large',
    usage: 'For page transforms, etc...',
    value: '0.275s',
  },
  {
    name: 'simple-large-enter',
    usage: 'For card transforms, etc...',
    value: '0.3s',
  },
  {
    name: 'simple-large-exit',
    usage: 'For card transforms, etc...',
    value: '0.25s',
  },
]
  .map(prefix('duration'))
  .map(type('time'));

// Timing functions for animations and transitions
const timings = [
  {
    name: 'decelerate',
    value: 'cubic-bezier(0, 0, .2, 1)',
  },
  {
    name: 'accelerate',
    value: 'cubic-bezier(.4, 0, 1, 1)',
  },
  {
    name: 'standard',
    value: 'cubic-bezier(.4, 0, .2, 1)',
  },
  {
    name: 'sharp',
    value: 'cubic-bezier(.4, 0, .6, 1)',
  },
]
  .map(prefix('timing-curve'))
  .map(type('timing function'));

module.exports = {
  durations,
  timings,
};
