const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        console.log(mailFrom, mailTo, mailSubject, mailBody);
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    sendBasicEmail
}
