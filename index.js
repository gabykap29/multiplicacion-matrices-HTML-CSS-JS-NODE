const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


app.post('/multiply', (req, res) => {
    const { matrix1, matrix2 } = req.body;

    // Lógica para multiplicar las matrices
    let result = multiplyMatrices(matrix1, matrix2);

    res.json({ result });
});

function multiplyMatrices(matrix1, matrix2) {
    // Lógica para multiplicar las matrices
}

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
