const express = require("express");
const cors = require("cors");
//const listUsersRoute = require("./src/models/listUsersRoute");

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
require("./src/routes/login.routes")(app);
require("./src/routes/registerPartner.routes")(app);
require("./src/routes/registerAdmFunc.routes")(app);
require("./src/routes/listUser.routes")(app);
require('./src/routes/attPartner.routes')(app);
require("./src/routes/deletePartner.routes")(app);
require("./src/routes/findById.routes")(app);
require("./src/routes/listUserExpertises.routes")(app);
require("./src/routes/deleteUsers.routes")(app);
require("./src/routes/user.routes")(app);

//app.use('/', listUsersRoute);

// Porta que o servidor vai escutar
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});