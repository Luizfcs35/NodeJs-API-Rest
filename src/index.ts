import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.routes";
import errorHandler from "./middlewares/error-handler-middleware";

const app = express();

// definição de aplicação json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//definição de porta
const port = "3000";

// definição de rotas
app.use(usersRoute);
app.use(statusRoute);

//config dos Handlers erros
app.use(errorHandler);


//Inicializador do Servidor
app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}.`);
});
