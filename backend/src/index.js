const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Métodos HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição. Utilizado para para criar ou alterar recursos
 */

/**
 * Diferenças entre banco de dados
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server ----- ESTRUTURADOS
 * NoSQL: MogoDB, CouchDB, etc ----- NÃO ESTRUTURADOS
 *
 * Utilizaremos SQLite por poder trabalhar em JS
 */

/**
 * Configurando o Banco de Dados
 *
 * 2 tipos:
 * Driver: Pacote original o aqual fará com que trabalhe com uma sintaxe diferente
 * Query Builder: Vou escrever utilizando JS e aceitará qulquer banco SQL, por isso é MELHOR
 */




