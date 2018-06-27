const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendMessage = (opt) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: '"kst" <kostasfq@gmail.com',
    to: '"SHM" <sekondhandmap@gmail.com',
    subject: `Добавлен магазин: ${opt.shop}`,
    text: `Адрес: ${opt.address.city}, ${opt.address.street} ${opt.address.building}`,
  };
  transport.sendMail(options, (error, info) => {
    if (error) return console.log(error);
    console.log(info);
    return console.log('success!');
  });
  return console.log('success!');
};
