const { TokenWriter } = require('teikn');
const tokens = require('./raw-tokens');

new TokenWriter({
  // Generate the files to this directory. It allows us to import things like
  // `import '~@eave/design-tokens/tokens';` in scss and
  // `import tokens from '@eave/design-tokens/tokens';` in javascript
  outDir: __dirname,
  // We're going to generate
  //   - the es modules JS version
  //   - the map w/ getter version of the scss
  //   - the json representation of the tokens
  generators: ['es', 'mapScss', 'json'],
}).run(tokens);
