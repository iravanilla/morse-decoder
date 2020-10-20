const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let text = '';
    let array = [];
    let code = '';

    for (let i = 0; i < expr.length; i+=10) {
        if (i % 10 === 0) {
            array.push(expr.substring(i, i + 10));
        }
    }

    for (let j = 0; j < array.length; j++) {
        code = '';
        for (let k = 0; k < 10; k++) {
            if (array[j][k] === '1' && array[j][k+1] === '1') {
                code += '-';
                k++;
            } 

            if (array[j][k] === '1' && array[j][k+1] === '0') {
                code += '.';
                k++;
            } 
           
            if (array[j][k] === '*') {
                code += ' ';
                break;
            }
        }

        if (code === ' ') {
            text += ' '; 
        } else {
            text += MORSE_TABLE[code];
        }
    }

    return text;
}



module.exports = {
    decode
}

