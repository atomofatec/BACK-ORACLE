const Password = require("../models/updatePassword.model");
const User = require("../models/login.model");

exports.updatePassword = async (req, res) => {
    const { userId } = req.params;
    const { oldPassword, newPassword } = req.body;

    try {
        // Verificar se o usuário existe e se a senha antiga está correta
        const user = await User.findById(userId);
        if (!user || user.password !== oldPassword) {
            return res.status(400).json({ message: 'Senha antiga incorreta' });
        }

        // Alterar a senha do usuário
        const success = await Password.changePassword(userId, newPassword);
        if (success) {
            res.status(200).json({ message: 'Senha alterada com sucesso' });
        } else {
            res.status(500).json({ message: 'Erro ao alterar a senha' });
        }
    } catch (error) {
        console.error('Erro ao alterar a senha:', error);
        res.status(500).send('Internal Server Error');
    }
};
