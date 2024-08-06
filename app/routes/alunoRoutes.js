const express = require('express');

const alunoController = require('../controllers/apiController')

const router = express.Router();

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Listar os Alunos.
 *     description: Todos os dados de todos os alunos.
 *     responses:
 *       200:
 *         description: lista de Alunos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: ID do alunos.
 *                         example: 1
 *                       nome:
 *                         type: string
 *                         description: Nome do aluno.
 *                         example: Willian Massao
 *                       idade:
 *                         type: integer    
 *                         description: Idade do aluno.
 *                         example: 23
 *                       notaSem1:
 *                         type: float
 *                         description: Nota do primeiro semestre.
 *                         example: 10
 *                       notaSem2:
 *                         type: float
 *                         description: Nota do segundo semestre.
 *                         example: 10
 *                       professor:
 *                         type: string
 *                         description: Professor responsavel.
 *                         example: Prof. Alcides
 *                       numSala:
 *                         type: integer
 *                         description: Numero da sala.
 *                         example: 167
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Requisição inválida
 */
router.get('/', alunoController.getAlunos);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Atualizar um aluno.
 *     description: Atualiza um aluno já inserido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *               nome:
 *                 type: string
 *                 example: "João Silva"
 *               idade:
 *                 type: integer
 *                 example: 20
 *               notaSem1:
 *                 type: number
 *                 format: float
 *                 example: 7.5
 *               notaSem2:
 *                 type: number
 *                 format: float
 *                 example: 8.0
 *               professor:
 *                 type: string
 *                 example: "Prof. Carlos"
 *               numSala:
 *                 type: integer
 *                 example: 101
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Aluno atualizado com sucesso!
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Requisição inválida
 */
router.post('/', alunoController.postAlunos);

/**
 * @swagger
 * /alunos:
 *   put:
 *     summary: Atualizar um aluno.
 *     description: Atualiza um aluno já inserido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *               nome:
 *                 type: string
 *                 example: "João Silva"
 *               idade:
 *                 type: integer
 *                 example: 20
 *               notaSem1:
 *                 type: number
 *                 format: float
 *                 example: 7.5
 *               notaSem2:
 *                 type: number
 *                 format: float
 *                 example: 8.0
 *               professor:
 *                 type: string
 *                 example: "Prof. Carlos"
 *               numSala:
 *                 type: integer
 *                 example: 101
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Aluno atualizado com sucesso!
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Requisição inválida
 */
router.put('/', alunoController.putAlunos);

/**
 * @swagger
 * /alunos:
 *   delete:
 *     summary: Deletar um aluno.
 *     description: Deleta um aluno existente usando seu ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Aluno deletado com sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Aluno deletado com sucesso!
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status da operação.
 *                   example: Requisição inválida
 */
router.delete('/', alunoController.deleteAlunos);

module.exports = router;