// UserController.js
const UserModel = require('../models/login');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findUserByEmail(email);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, token: null });
    }

    // Direcionando para a tela do tipo de usuário
    res.status(200).send({ auth: true, userType: user.type });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).send("Houve um problema ao fazer login.");
  }
};

module.exports = { loginUser };