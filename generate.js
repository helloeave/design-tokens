const { TokenWriter } = require('teikn');
const tokens = require('./raw-tokens');

new TokenWriter({ outDir: __dirname, generators: ['scss', 'json'] }).run(tokens);
