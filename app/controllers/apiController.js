const Alunos = require("../models/aluno")

exports.getAlunos = async (req, res)=>{
    try{
        let [getResponse] = await Alunos.selectAll();
        res.status(200).json(getResponse);
    }catch(err){
        res.status(400).json(res);
    }
}

exports.putAlunos = async (req, res)=>{
    try{
        let [putResponse] = await Alunos.create(req.body);
        res.status(200).json({Status: 'Aluno inserido com sucesso!.'});
    }catch(err){
        res.status(400).json({Status: 'Requisição inválida'});
    }
}

exports.postAlunos = async (req, res)=>{
    try{
        let postResponse = await Alunos.update(req.body);
        res.status(200).json({Status: 'Aluno alterado com sucesso!.'});
    }catch(err){
        res.status(400).json({Status: 'Requisição inválida'});
    }
}

exports.deleteAlunos = async (req, res)=>{
    try{
        let deleteResponse = await Alunos.delete(req.body.id);
        res.status(200).json({Status: 'Aluno deletado com sucesso!.'});
    }catch(err){
        res.status(400).json({Status: 'Requisição inválida'});
    }
}