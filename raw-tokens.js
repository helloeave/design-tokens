const tokens = [
  {
    name: 'test',
    type: 'color',
    usage: 'This is a test',
    value: 'transparent',
  },
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
    value: 5001,
  },
];

module.exports = tokens;
