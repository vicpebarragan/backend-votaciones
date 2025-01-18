const nodemailer = require('nodemailer');

// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD    
  }
});

// Controlador para enviar correos
const enviarCorreo = async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    // Configurar los detalles del correo
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS, 
      to,                        
      subject,                   
      text,                      
      html                       
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Correo enviado con éxito',
      info
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al enviar el correo',
      error
    });
  }
};

module.exports = {
  enviarCorreo
};
