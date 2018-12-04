let a = +prompt('Введите число');

document.write('Число : ' + a + '.<br />');

function Num() {
    if (a > 0) {
        document.write('Число положительное.' + '<br />');
    }
    else if (a == 0) {
        document.write('На числовой прямой 0 разделяет положительные и отрицательные числа.' + '<br>');
        document.write('При делении нуля на любое не нулевое число получается ноль.' + '<br>');
    }
    else {
        document.write('Число отрицательное.' + '<br />');
    }
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            document.write("Число составное." + "<br>");
            break;
        }
        else {
            if (i == a - 1 || i >= a) {
                document.write('Простое число.' + "<br>");
            }
        }
    }
    for (i = 2; i <= 9; i++) {
        if (a / i == 0) {
            break;
        }
        if (i == 4 || i == 7 || i == 8) {
            continue;
        }
        if (a % i === 0) {
            document.write("Число делится на: " + i + " без остатка." + "<br>")
        }
    }
}

Num();