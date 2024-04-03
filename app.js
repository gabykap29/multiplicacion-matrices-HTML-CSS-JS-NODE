document.getElementById('matrixForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let matrix1 = parseMatrix(document.getElementById('matrix1').value);
    let matrix2 = parseMatrix(document.getElementById('matrix2').value);

    let result = multiplyMatrices(matrix1, matrix2);

    document.getElementById('result').innerHTML = "Resultado: <br>" + result.map(row => row.join(' ')).join('<br>');
    document.getElementById('matrix1').value = '';
    document.getElementById('matrix2').value = '';
});

function parseMatrix(input) {
    return input.trim().split('\n').map(row => row.trim().split(/\s+/).map(Number));
}

function multiplyMatrices(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
