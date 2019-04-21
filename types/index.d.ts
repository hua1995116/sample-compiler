
declare type TType = 'arith' | 'parren' | 'number' | string;
declare interface Token {
    type: TType;
    value: string;
}

declare type astType = {type: string, name: string, params: astType[]}
declare interface ast {
    type: string;
    body: astType[];
}

declare module 'sample-compiler' {
    export function genToken(str: string) : Token[];

    export function parse(tokens: Token[]): ast;

    export function generate(ast: Object): string;
}