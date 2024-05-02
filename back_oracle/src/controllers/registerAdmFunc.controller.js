const UserModel = require("../models/registerAdmFunc.model");

const createUser = async (req, res) => {
    const createdAt = new Date();
    const updatedAt = new Date();
    const {
        user_name,
        email,
        password,
        type,
        benefits,
    } = req.body;

    // Verifica o tipo de usuário que está realizando o cadastro
    const userType = req.body.userType;

    try {
        // Verifica se o usuário já existe
        const existingUser = await UserModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).send("Usuário já existe");
        }

        // Se usuário = admin, tem permissão para cadastrar apenas admin e funcionario
        if (userType === "admin") {
            // Verifica se o tipo a ser cadastrado é admin ou funcionario
            if (type !== "admin" && type !== "funcionário") {
                return res
                    .status(403)
                    .send("Você não tem permissão para realizar esta operação");
            }
        } else {
            // Se não for admin, retorna erro de permissão
            return res
                .status(403)
                .send("Você não tem permissão para realizar esta operação");
        }

        // Insere o novo usuário no banco de dados
        await UserModel.createUser({
            user_name,
            email,
            password,
            type,
            benefits,
            createdAt,
            updatedAt,
        });

        // Retorna sucesso
        return res.status(201).send("Usuário cadastrado com sucesso");
    } catch (error) {
        console.error("Erro ao cadastrar usuário: ", error);
        res.status(500).send("Houve um problema ao cadastrar usuário");
    }
};

module.exports = { createUser };