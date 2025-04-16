function sumOfDigits(number) {
    const str = number.toString();
    let sum = 0;
    for (let char of str) {
        sum += parseInt(char, 10);
    }
    return sum;
}

function combineSymbols(symbol1, symbol2, symbol3) {
    const result = symbol1 + symbol2 + symbol3;
    return result;
}

function cityInfo(name, population, area) {
    const info = `Town ${name} has population of ${population} and area ${area} square km.`;
    return info;
}

function calculator(number, operator, numberTwo) {
    let result;
    switch (operator) {
        case '+':
            result = number + numberTwo;
            break;
        case '-':
            result = number - numberTwo;
            break;
        case '*':
            result = number * numberTwo;
            break;
        case '/':
            if (numberTwo === 0) {
                return "Ошибка: деление на 0";
            }
            result = number / numberTwo;
            break;
        default:
            return "Ошибка: недопустимый оператор";
    }
    return result.toFixed(2);
}
function binaryToDecimal(binaryString) {
    if (binaryString.length !== 8 || !/^[01]+$/.test(binaryString)) {
        return "Ошибка: входная строка должна быть 8-битным двоичным числом";
    }
    const decimal = parseInt(binaryString, 2);
    return decimal;
}

console.log(sumOfDigits(245678));
console.log(sumOfDigits(97561));
console.log(sumOfDigits(543));

console.log(combineSymbols('a', 'b', 'c'));
console.log(combineSymbols('%', '2', 'o'));
console.log(combineSymbols('1', '5', 'p'));

console.log(cityInfo('Moscow', 12636312, 2561));
console.log(cityInfo('New York', 8419000, 784));

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));
console.log(calculator(10, '*', 5));
console.log(calculator(20, '/', 4));
console.log(calculator(10, '/', 0));
console.log(calculator(10, '%', 5));

console.log(binaryToDecimal('00001001'));
console.log(binaryToDecimal('11110000'));
console.log(binaryToDecimal('10101010'));
console.log(binaryToDecimal('00000000'));
console.log(binaryToDecimal('11111111'));
console.log(binaryToDecimal('1010'));
console.log(binaryToDecimal('12345678'));