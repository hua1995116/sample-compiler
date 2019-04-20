function generate(ast) {
    const body = ast.body[0];

    function gen(node) {
        if(node.type === 'arithCall') {
            return `(${node.params.map(gen).join(node.name)})`
        } else if(node.type === 'number') {
            return node.value;
        }
    }

    const exp = gen(body);
    
    return exp;
}

export default generate;
