const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');
console.log(EMAIL_ID, EMAIL_PASS);

let sender = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'lbmuser04@hotmail.com',
        pass: "lbmsol@@0614",
    },
    tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
    }
});

// console.log(sender);

module.exports = sender;
