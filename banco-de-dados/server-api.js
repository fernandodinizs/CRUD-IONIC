const express = require('express');
const cors = require('cors'); 
const sqlite3 = require('sqlite3').verbose(); 
const path = require('path');
const aplicativo = express();

aplicativo.use(express.json());
aplicativo.use(cors());

const dbPath = path.join(__dirname, 'frutas.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao SQLite:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite local.');
    }
});

// Criação da tabela e banco de dados
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS frutas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            preco REAL NOT NULL,
            quantidade INTEGER NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        } else {

            db.get('SELECT COUNT(*) as count FROM frutas', [], (err, row) => {
                if (err) return console.error(err.message);
                if (row.count === 0) {
                    const stmt = db.prepare('INSERT INTO frutas (nome, preco, quantidade) VALUES (?, ?, ?)');
                    stmt.run('Maçã', 2.50, 10);
                    stmt.run('Banana', 3.00, 5);
                    stmt.run('Laranja', 2.00, 8);
                    stmt.finalize();
                    console.log('Dados padrão inseridos com sucesso!');
                }
            });
        }
    });
});

// GET localhost:3005/minha-api/frutas
aplicativo.get('/minha-api/frutas', (req, res) => {
    db.all('SELECT * FROM frutas', [], (err, rows) => {
        if (err) {
            res.status(500).json({ erro: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST localhost:3005/minha-api/frutas
aplicativo.post('/minha-api/frutas', (req, res) => {
    const novaFruta = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    };

    db.run(
        'INSERT INTO frutas (nome, preco, quantidade) VALUES (?, ?, ?)',
        [novaFruta.nome, novaFruta.preco, novaFruta.quantidade],
        function (err) {
            if (err) {
                res.status(500).json({ erro: err.message });
                return;
            }
            res.status(201).json({
                id: this.lastID,
                ...novaFruta
            });
        }
    );
});

// PUT localhost:3005/minha-api/frutas/:id
aplicativo.put('/minha-api/frutas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    };

    db.run(
        'UPDATE frutas SET nome = ?, preco = ?, quantidade = ? WHERE id = ?',
        [dadosAtualizados.nome, dadosAtualizados.preco, dadosAtualizados.quantidade, id],
        function (err) {
            if (err) {
                res.status(500).json({ erro: err.message });
                return;
            }
            if (this.changes === 0) {
                return res.status(404).json({ mensagem: "Fruta não encontrada" });
            }
            res.json({
                id,
                ...dadosAtualizados
            });
        }
    );
});

// DELETE localhost:3005/minha-api/frutas/:id
aplicativo.delete('/minha-api/frutas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.run('DELETE FROM frutas WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ erro: err.message });
            return;
        }
        if (this.changes === 0) {
            return res.status(404).json({ mensagem: "Fruta não encontrada" });
        }
        res.json({ mensagem: "Fruta removida com sucesso" });
    });
});

aplicativo.listen(3005, () => {
    console.log('A API está em execução na porta 3005!');
});