let a = +prompt('Введите целое число : ');
let b = +prompt('Введите второе целое число : ');
let c = +prompt('Введите третье целое число : ');

function Calculate() {
    return (a + b + c) / 3;
};

document.write('Первое число - ' + a + '<br>');
document.write('Второе число - ' + b +'<br>');
document.write('Третье число - ' + c + '<br><br>');

document.write('Среднее арифмитеческое трех чисел с округлением до целого числа : ' + Math.round(Calculate()));