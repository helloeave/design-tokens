const prefix = str => token => ({ ...token, name: `${str}-${token.name}` });
const type = t => token => ({ ...token, type: t });

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

const toRem = num => `${num * 0.0625}rem`;

module.exports = {
  prefix,
  type,
  getFromMap,
  toRem,
};
