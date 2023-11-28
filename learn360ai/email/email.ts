import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


const transporterConfig: SMTPTransport.Options = {
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT ? +process.env.EMAIL_PORT : 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};

const transporter: Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport(transporterConfig);


export async function sendEmail(to: string, subject: string, text: string) {
    try {

        //console.log(transporterConfig)

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text,
        });
        //console.log('Email sent successfully to ' + to);
    } catch (error) {
        //console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}
