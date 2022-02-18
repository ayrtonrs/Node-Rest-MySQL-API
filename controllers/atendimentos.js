const conexao = require('../infraestrutura/conexao')
const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    
        Atendimento.altera(id, valores, res) 
            const sql = `UPDATE Atendimento SET ? WHERE id=?`
        
            conexao.query(sql, [valores, id], (erro, resultados) => { 
                if(erro) {
                    res.status(401).json(erro)
                } else {
                    res.status(200).json(resultados)
                }
            })
        })

        app.delete('/atendimentos/:id', (req, res) => {
            const id = parseInt(req.params.id)

            Atendimento.deleta(id, res)
        })
    
}
