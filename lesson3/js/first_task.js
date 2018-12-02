let array = [94, 115, 79, 85, 444, 39, 71, 58, 61, 119, 59];

function arrayMax(array) {
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i];
    }
    document.write('Максимальное значение в масииве : ' + max + '<br />');
    console.log(max);
}
arrayMax(array);

function arrayMin(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    document.write('Минимальное значанеи в массиве : ' + min + '<br />');
}
arrayMin(array);

function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    document.write('Сумма всех значений в масииве : ' + sum + '<br />');
}
arraySum(array);

function arrayAvg(array) {
    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    avg = sum / array.length;
    
    document.write('Среднее арифмитечское всех значений в массиве : ' + (Math.floor(avg)) + '<br />');

    // (Math.floor(avg)) - округляет до целого числа
}
arrayAvg(array);

function arrayX(array) {
    var n = 0;

    document.write('Нечетные элементы в массиве : ');

    for (i = 0; i < array.length; i++) {
        if (n = array[i] % 2) {
            document.write(array[i] + ' ');
        }
    }
}
arrayX(array);
