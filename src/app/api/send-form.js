"use server"

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    }
})


const sendEmail = async (mailOptions) => {

    try {
        await transporter.sendMail(mailOptions);
        console.log("E-mail enviado com sucesso!");
    } catch (error) {
        console.log("Erro: ", error);
    }
};

export default sendEmail