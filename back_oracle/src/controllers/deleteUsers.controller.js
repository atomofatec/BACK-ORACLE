const PartnerModel = require("../models/deleteUsers.model");

const deleteUser = async (req, res) => {
    const partnerId = req.params.id; // Captura o ID do parceiro a ser excluído

    try {
        // Chama a função do modelo para excluir o parceiro
        const success = await PartnerModel.deleteById(partnerId);

        if (success) {
            res.status(200).send("Usuário excluído com sucesso");
        } else {
            res.status(404).send("Usuário não encontrado");
        }
    } catch (error) {
        console.error("Erro ao excluir usuário:", error.message);
        res.status(500).send("Houve um problema ao excluir o usuário");
    }
};

module.exports = { deleteUser };