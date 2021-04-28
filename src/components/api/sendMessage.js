const endpoint = "/";

const axios = require("axios").default;

export const sendMail = ({ mail, mailBody }) => {
  return axios
    .get(`https://aboutme-backend.herokuapp.com/`, {
      mail,
      mailBody,
    })
    .then(
      (response) => {
        if (response.status == 200) return console.log("coso");
        console.log("aaa");
      },
      (error) => {
        console.log(error);
      }
    );
};
