require("dotenv").config();
const User = require("../models/login.model");

exports.login = async (req, res) => {
    try {
        // Busca o usuário pelo email
        let user = await User.findByEmail(req.body.email);

        // Verifica se o usuário existe e se a senha está correta
        if (user.length) {
            const samePass = req.body.password === user[0].password;

            if (samePass) {
                // Se o usuário existe e a senha está correta, retorna uma mensagem de sucesso
                res.send({ message: "Login bem-sucedido!", userID: user[0].user_id, userName: user[0].user_name, email: user[0].email, userType: user[0].type, benefits: user[0].benefits, createdAt: user[0].createdat, updatedAt: user[0].updatedat});
                return;
            }
        }

        res.status(400).send("Usuário ou senha inválidos");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao processar requisição!");
    }
};
