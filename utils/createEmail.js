const sendEmail = require("./sendEmail");

// создаем рассылку
const createEmail = (emailList) => {
  const requests = emailList.forEach((item) => sendEmail(item));
  Promise.allSettled(requests);
};

module.exports = createEmail;
