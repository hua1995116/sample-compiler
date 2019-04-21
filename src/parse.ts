// (+ (* 1 4) 2 )

function parse(tokens: Token[]): ast {
    let i = 0;

    const ast = {
        type: 'program',
        body: []
    }

    function child_node() {
        let token = tokens[i];
        if(token.type === 'number') {
            return token;
        }

        if(token.type === 'parren' && token.value === '(') {
            token = tokens[++i];

            const arith_node = {
                type: 'arithCall',
                name: token.value,
                params: []
            }
            token = tokens[++i];

            while(token && token.value !== ')') {
                arith_node.params.push(child_node());
                token = tokens[++i];
            }
            
            if (token.type === 'parren' && token.value === ')') return arith_node;
        }
    }
    ast.body.push(child_node());

    return ast;
}

export default parse;