import { expect } from 'chai';

import genToken from '../src/token';
import parse from '../src/parse';
import generate from '../src/generate';

describe('Stack', () => {
    it('can be tokens', () => {
        const tokens = genToken('(+ (* 1 4) 2 )');
        const expectValue = '[{"type":"parren","value":"("},{"type":"arith","value":"+"},{"type":"parren","value":"("},{"type":"arith","value":"*"},{"type":"number","value":"1"},{"type":"number","value":"4"},{"type":"parren","value":")"},{"type":"number","value":"2"},{"type":"parren","value":")"}]';
        expect(JSON.stringify(tokens)).to.equal(expectValue);
    });

    it('can be parse', () => {
        const tokens = genToken('(+ (* 1 4) 2 )');
        const ast = parse(tokens);
        const expectValue = '{"type":"program","body":[{"type":"arithCall","name":"+","params":[{"type":"arithCall","name":"*","params":[{"type":"number","value":"1"},{"type":"number","value":"4"}]},{"type":"number","value":"2"}]}]}';
        expect(JSON.stringify(ast)).to.equal(expectValue);
    });

    it('can be gen', () => {
        const tokens = genToken('(+ (* 1 4) 2 )');
        const ast = parse(tokens);
        const exp = generate(ast);
        const expectValue = '((1*4)+2)';
        expect(exp).to.equal(expectValue);
    });
})