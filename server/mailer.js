const nodemailer = require('nodemailer');

exports.sendMessage = (opt) => {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port:25,
        auth: {
            user: 'sekondhandmap@gmail.com',
            pass: '1758236z',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let options = {
        from: '"kst" <kostasfq@gmail.com',
        to: '"SHM" <sekondhandmap@gmail.com',
        subject: 'Добавлен магазин: ' + opt.shop,
        text: 'Адрес: ' + opt.address.street + ', ' + opt.address.building,
    };
    transport.sendMail(options, (error, info) =>{
        if (error) return console.log(error);
        console.log(info)
    } );
    return console.log('success!');
};





