import genToken from './src/token';
import parse from './src/parse';
import generate from './src/generate';

const tokens = genToken('(+ (* 1 4) 2 )');

const ast = parse(tokens);

const exp = generate(ast);

console.log(exp);
