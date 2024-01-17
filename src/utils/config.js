const config = {
    rabbitMq: {
        server: process.env.RABBITMQ_SERVER,
    },
    nodemailer: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
};

module.exports = config;
