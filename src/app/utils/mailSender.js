const nodemailer = require('nodemailer'); // Import nodemailer module for sending email

/**
 * This function will send email to the user
 * @param {string} email - Email address of the user
 * @param {string} body - The body of the email
 * @param {string} title - The title of the email
 */
export async function mailSender(email, body, title) {
    try {
        // Create a transporter object using the nodemailer.createTransport method
        const transporter = nodemailer.createTransport(
            {
                host: process.env.MAIL_HOST, // The host of the email server
                auth: {
                    user: process.env.MAIL_USER, // The user of the email server
                    pass: process.env.MAIL_PASS, // The password of the email server
                }
            }
        );

        // Use the transporter.sendMail method to send the email
        const response = await transporter.sendMail({
            from: process.env.MAIL_USER, // The sender of the email
            to: email, // The recipient of the email
            body: body, // The body of the email
            subject: title // The title of the email
        });

        // Log the response to the console
        console.log(`This is the response for sending email to ${email} =====> `, response);
    }
    catch (Error) {
        // Log the error to the console if it occurs
        console.log("Error occur in mailSender function (mailSender.js)");
        console.log(Error);
    }
}
