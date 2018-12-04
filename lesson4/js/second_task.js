let a = +prompt('Введите число');

        document.write('Число : ' + a + '<br />');

        function Num() {
            if (a > 0) {
                document.write('Число положительное.' + '<br />');
            }
            else {
                document.write('Число отрицательное.' + '<br />');
            }
            for(var i = 2; i < a; i++) {
                if (a % i === 0) {
                    document.write("Число составное." + "<br>");
                    break;
                }
                else {
                    if (i == a - 1) {
                        document.write('Простое число.' + "<br>");
                    }
                }
            }
            for (i = 2; i <= 9; i++) {
                if (i == 4 || i == 7 || i == 8) {
                    continue;
                }
                if (a % i === 0) {
                    document.write("Число делится на: " + i + " без остатка." + "<br>")
                }
            }
        }
 Num();