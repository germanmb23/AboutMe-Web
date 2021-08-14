const endpoint = "/";

const axios = require("axios").default;

export const sendMail = async ({ mail, mailBody }) => {
  return await axios
    .post(`https://aboutme-backend.herokuapp.com/`, {
      mail,
      mailBody,
    })
    .then(
      (response) => {
        return response.status == 200;
      },
      (error) => {
        return false;
        console.log(error);
      }
    );
};
