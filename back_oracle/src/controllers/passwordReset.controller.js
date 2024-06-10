const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const PasswordResetModel = require("../models/passwordReset.model");

// Configuração do transportador de email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "oraclefatec5ads@gmail.com",
        pass: "dzpq wwes zorl otyj"
    }
});

// Função para solicitar a recuperação de senha
exports.requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await PasswordResetModel.findByEmail(email);

        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        const token = jwt.sign({ email }, 'SECRET', { expiresIn: '12h' });

        const mailOptions = {
            from: 'oraclefatec5ads@gmail.com',
            to: email, // Email fornecido na requisição
            subject: 'Recuperação de Senha',
            html: `<p>Olá ${email},</p>
                   <p>Para trocar a senha, clique no link abaixo:</p>
                   <p><a href="http://localhost:3000/recuperarsenha/${token}">Trocar senha</a></p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Erro ao enviar email:", error);
                return res.status(500).send("Erro ao enviar email");
            }
            res.status(200).send("Email de recuperação de senha enviado");
        });
    } catch (error) {
        console.error("Erro ao solicitar recuperação de senha:", error);
        res.status(500).send("Erro ao solicitar recuperação de senha");
    }
};

// Função para resetar a senha
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const payload = jwt.verify(token, 'SECRET');
        const email = payload.email;

        const user = await PasswordResetModel.findByEmail(email);
        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        // Verificar se a nova senha é igual à senha atual
        if (user.password === newPassword) {
            return res.status(400).send("A nova senha não pode ser a mesma que a senha atual.");
        }

        await PasswordResetModel.updatePassword(email, newPassword);

        res.status(200).send("Senha atualizada com sucesso");
    } catch (error) {
        console.error("Erro ao resetar senha:", error);
        res.status(500).send("Erro ao resetar senha");
    }
};
