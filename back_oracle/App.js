const express = require("express");
const cors = require("cors");
const app = express(); // Inicializa o servidor
const { run } = require("./src/db/mongo")
//const listUsersRoute = require("./src/models/listUsersRoute");

async function setupDatabase() {
    try {
        await run();
    } catch (error) {
        console.error("Erro ao configurar o banco de dados:", error);
    }
}

setupDatabase();
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
require("./src/routes/login.routes")(app);
require("./src/routes/registerPartner.routes")(app);
require("./src/routes/registerAdmFunc.routes")(app);
require("./src/routes/listUser.routes")(app);
require("./src/routes/attPartner.routes")(app);
require("./src/routes/deletePartner.routes")(app);
require("./src/routes/findById.routes")(app);
require("./src/routes/deleteUsers.routes")(app);
require("./src/routes/expertise.routes")(app);
require("./src/routes/completionsCount.routes")(app);
require("./src/routes/expertises.routes")(app);
require("./src/routes/expertisesProgress.routes")(app);
require("./src/routes/partnersCount.routes")(app);
require("./src/routes/qualificationsStatus.routes")(app);
require("./src/routes/user.routes")(app);
require("./src/routes/passwordReset.routes")(app);
require("./src/routes/listagensGerais.routes")(app);
require("./src/routes/tracks.route")(app);

//app.use('/', listUsersRoute);

// Porta que o servidor vai escutar
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

