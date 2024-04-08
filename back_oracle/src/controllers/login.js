require("dotenv").config();
const User = require("../models/login");

exports.login = async (req, res) => {
    try {
        // Busca o usuário pelo email
        let user = await User.findByEmail(req.body.email);

        // Verifica se o usuário existe e se a senha está correta
        if (user.length) {
            const samePass = req.body.password === user[0].password;

            if (samePass) {
                // Se o usuário existe e a senha está correta, retorna uma mensagem de sucesso
                user = await User.findById(user[0].user_id);
                res.send("Login bem-sucedido!");
                return;
            }
        }

        res.status(400).send("Usuário ou senha inválidos");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao processar requisição!");
    }
};