const { prefix, type } = require('../utils');

const zlayers = [
  {
    name: 'hidden',
    usage: 'For items that should be on the page but not visible',
    value: -1,
  },
  {
    name: 'default',
    usage: 'Used for setting a standard z-index',
    value: 1,
  },
  {
    name: 'dropdown',
    usage: 'used for dropdowns',
    value: 1000,
  },
  {
    name: 'overlay',
    usage:
      'Used for overlays and things that are supposed to mask the page so that other things above them can be afforded visual focus',
    value: 5000,
  },
  {
    name: 'modal',
    usage: 'For popups and other modal elements with a high elevation',
    value: 6000,
  },
]
  .map(prefix('elevation-z'))
  .map(type('z-index'));

module.exports = {
  zlayers,
};
