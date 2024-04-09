const express = require("express");
const cors = require("cors");
const listUsersRoute = require("./src/models/listUsersRoute");

const app = express(); // Inicializa o servidor

// var corsOptions = {
//   origin: "http://localhost:3000", //front
// };

// app.use(cors(corsOptions));

app.use(cors()); // Aceita requisições de qualquer origem

app.use(express.json()); // Aceita requisições no formato JSON
app.use(express.urlencoded({ extended: true })); // Aceita requisições no formato URL

// Rota inicial
app.get("/", (req, res) => {
    res.json({ message: "Application is running." });
});

// Rotas
require("./src/routes/routesLogin")(app);
require("./src/routes/partnerRoutes")(app);
require("./src/routes/routesCadastro")(app);
app.use('/', listUsersRoute);

// Porta que o servidor vai escutar
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});