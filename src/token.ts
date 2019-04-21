function genToken(str: string): Token[]{
    const tokens: Token[] = [];
    const numReg = /[0-9\.]/

    for (let i = 0; i < str.length; i++) {
        let item = str[i];
        if (item === ' ') {
            continue;
        }

        if (item === '+' || item === '-' || item === '*' || item === '/') {
            tokens.push({
                type: 'arith',
                value: item
            });
            continue;
        }

        if (item === '(' || item === ')') {
            tokens.push({
                type: 'parren',
                value: item
            });
            continue;
        }

        if (numReg.test(item)) {
            let num = '';
            while (numReg.test(item)) {
                num += item;
                i++;
                item = str[i];
            }
            i--;
            tokens.push({
                type: 'number',
                value: num
            });
        }
    }
    return tokens;
}


export default genToken;