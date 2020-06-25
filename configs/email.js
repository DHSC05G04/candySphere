require('dotenv').config();
const nodemailer = require('nodemailer');
const email = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:`${process.env.EMAIL_USER}`,
        pass:`${process.env.EMAIL_SENHA}`
    }
});

module.exports = email;