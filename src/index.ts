import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.routes";

const app = express();

// definição de aplicação json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//definição de porta
const port = "3000";

// definição de rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicializador do Servidor
app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}.`);
});
