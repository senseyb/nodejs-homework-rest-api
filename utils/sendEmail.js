const sgMail = require("@sendgrid/mail"); // импортируем пакет sendGreed
const { SENDGRID_API_KEY } = process.env; // забираем ключ из переменных окружения

// sgMail.setApiKey(SENDGRID_API_KEY); //у объекта sgMail вызываем метод setApiKey и передаем ему ключ (он отвечает за отправку писем)
sgMail.setApiKey(
  "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"
);
// Для отправки почты нужно создать письмо:

// const email = {
//   from: "rejoicesrevenge@gmail.com",
//   to: "cibari6344@mnqlm.com",
//   subject: "test mail",
//   html: `<p>Hello!</p>`,
// };

// создаем универсальную функцию, которая отправляет письмо от нашего имени
const sendEmail = async ({ to, subject, html }) => {
  const email = {
    from: "rejoicesrevenge@gmail.com",
    to,
    subject,
    html,
  };
  const result = await sgMail.send(email); // у обьекта sgMail вызываем метод send и передаем ему email
  return result;
};

module.exports = sendEmail;
