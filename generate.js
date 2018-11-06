const { TokenWriter } = require('teikn');
// const { TokenWriter } = require('../teikn');
const tokens = require('./raw-tokens');

new TokenWriter({ outDir: __dirname, generators: ['mapScss', 'json', 'es'] }).run(tokens);
