const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 *  GET: Busca/Lista uma informação do back-end
 *  POST: Cria uma informação no back-end
 *  PUT: Altera uma informação no back-end
 *  DELETE: Deleta uma informação no back-end
*/

/**
 * Tipos de Parâmetros:
 * 
 *  Query: Parâmetros nomeados enviados na rotas após *?* (Filtros, paginação) request.query
 *  Route Params: Parâmetros utilizados para identificar recursos request.params
 *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL
 * NoSQLs
 */

 /**
  * Driver: Select * From users
  * Query Builder: tablet{'users'}.select{'*'}.where()
  */



