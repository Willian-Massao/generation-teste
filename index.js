const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Alunos API',
      version: '1.0.0',
      description: 'Projeto Feito por Willian Massao para Generation'
    },
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./app/routes/alunoRoutes.js'],
};


const swaggerSpec = swaggerJSDoc(options);
const app = express()
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(bodyParser.json());

const AlunosRoutes = require('./app/routes/alunoRoutes')

app.use('/alunos', AlunosRoutes);

app.use(swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.listen(3000)