let matrix = [
    [5, 2, 3, 4, 5],
    [3, -3, 5, 6, 7],
    [7, 8, 9, 3, 8],
    [4, 2, 5, -7, 5],
    [8, 5, 3, 2, 7]
];

if (matrix[0][0] > 0) {
    matrix[0][0] = 1;
} else {
    matrix[0][0] = 0;
}

for (i = 0; i < matrix.length; i++) {
    document.write('<br />' + matrix[i]);
    if (matrix[i+1][i+1] > 0) {
        matrix[i + 1][i + 1] = 1;
    }
    if (matrix[i + 1][i + 1] <= 0) {
        matrix[i + 1][i + 1] = 0;
    }
}