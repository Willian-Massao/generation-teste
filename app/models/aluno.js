var db= require('../../config/mysql2');

module.exports = class Aluno {
    constructor(id, nome, idade, notaSem1, notaSem2, professor, numSala){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.notaSem1 = notaSem1;
        this.notaSem2 = notaSem2;
        this.professor = professor;
        this.numSala = numSala;
    }
    //Create
    static create(aluno){
        const sql = "insert into alunos (id, nome, idade, notaSem1, notaSem2, professor, numSala) values(?,?,?,?,?,?,?);"
        return db.execute(sql, [aluno.id, aluno.nome, aluno.idade, aluno.notaSem1, aluno.notaSem2, aluno.professor, aluno.numSala])
    }
    //Read
    static selectAll(){
        return db.execute('select * from alunos;');
    }
    //Update
    static update(aluno){
        const sql = "update alunos set nome = ?, idade = ?, notaSem1 = ?, notaSem2 = ?, professor = ?, numSala = ? where id = ?;" 
        return db.execute(sql,[aluno.nome, aluno.idade, aluno.notaSem1, aluno.notaSem2, aluno.professor, aluno.numSala, aluno.id])
    }
    //Delete or Disable
    static delete(id){
        const sql = "delete from alunos where id = ?;"
        return db.execute(sql, [id])
    }
}