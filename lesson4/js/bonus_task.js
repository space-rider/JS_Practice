var a = +prompt('Введите целое число : ');
var b = +prompt('Введите второе целое число : ');
var c = +prompt('Введите третье целое число : ');

function Calculate() {
    return (a + b + c) / 3;
};

document.write('Среднее арифмитеческое трех чисел с округлением до целого числа : ' + Math.round(Calculate()));