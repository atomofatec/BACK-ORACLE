const PartnerModel = require("../models/deletePartner.model");

const deletePartner = async (req, res) => {
    const partnerId = req.params.id; // Captura o ID do parceiro a ser excluído
    const userType = req.body.userType; // Captura o tipo de usuário

    try {
        // Verifica se o tipo de usuário é "funcionário"
        if (userType !== "funcionário") {
            return res.status(403).send("Você não tem permissão para realizar esta operação");
        }

        // Chama a função do modelo para excluir o parceiro
        const success = await PartnerModel.deleteById(partnerId);

        if (success) {
            res.status(200).send("Parceiro excluído com sucesso");
        } else {
            res.status(404).send("Parceiro não encontrado");
        }
    } catch (error) {
        console.error("Erro ao excluir parceiro",);
        res.status(500).send("Houve um problema ao excluir o parceiro");
    }
};

module.exports = { deletePartner };