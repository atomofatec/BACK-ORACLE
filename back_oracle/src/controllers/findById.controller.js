
const UserModel = require("../models/findById.models");

exports.getUserById = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await UserModel.findUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ message: "Erro ao buscar usuário" });
    }
};
