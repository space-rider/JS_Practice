let a = +prompt('Введите целое число');
let b = +prompt('Введите второе целое число');
let x = prompt('Выберите действие, Add, Sub, Mul, Div');

document.write('Первое число : ' + a + '<br>');
document.write('Второе число : ' + b + '<br>');

function Add() {
    return a + b;
};

function Sub() {
    return a - b;
};

function Mul() {
    return a * b;
};

function Div() {
    return a / b;
};

switch (x) {
    case 'Add':
        alert(Add());
        document.write('Сложение двух чисел : ' + Add())
        break;
    case 'Sub':
        alert(Sub());
        document.write('Вычитание двух чисел : ' + Sub())
        break;
    case 'Mul':
        alert(Mul());
        document.write('Умножение двух чисел : ' + Mul())
        break;
    case 'Div':
        if (a == 0 || b == 0) {
            alert('Деление на 0 невозможно');
            document.write('Деление на 0 невозможно');
            break;
        }
        else {
            alert(Div());
            document.write('Деление двух чисел : ' + Div());
            break;
        }
    default: {
        document.write('Действие не выбрано');
    }    
}