const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/routesCadastro');

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
