const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrNumbers = [],
        temp = [];
    let arr = expr.split('');

    for (let i = 0; i < arr.length; i += 10) {
        for (let j = i; j < i + 10; j++) {
            temp.push(arr[j])
        }
        arrNumbers.push(temp);
        temp = [];
    }

    let arrLetters = [];

    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i][0] != '*') {
            for (let j = 0; j < arrNumbers[i].length; j += 2) {
                temp += ((arrNumbers[i][j] + arrNumbers[i][j + 1] == '10') ? '.' : (arrNumbers[i][j] + arrNumbers[i][j + 1] == '11') ? '-' : '');
            }
            arrLetters.push(temp);
            temp = '';
        } else {
            arrLetters.push(' ');
            continue;
        }
    }

    let retWord = '';

    for (let i = 0; i < arrLetters.length; i++) {
        if (arrLetters[i] != ' ') {
            retWord += MORSE_TABLE[arrLetters[i]];
        } else {
            retWord += ' ';
        }
    }

    return retWord;

}

module.exports = {
    decode
}