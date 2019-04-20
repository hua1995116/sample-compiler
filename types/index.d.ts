import {Token} from '../src/token';
import {ast} from '../src/parse';

declare namespace sampleCompiler {
    export function genToken(str: string) : Token[];

    export function parse(tokens: Token[]): ast;

    export function generate(ast: Object): string;
}