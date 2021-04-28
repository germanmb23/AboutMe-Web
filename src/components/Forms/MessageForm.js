import React, { Component } from "react";
import Button from "components/CustomButtons/Button.js";
import EmailIcon from "@material-ui/icons/Email";
import { sendMail } from "components/api/sendMessage";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mail: "", message: "" };

    this.handleChangeMail = this.handleChangeMail.bind(this);

    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMail(event) {
    this.setState({ mail: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const mail = this.state.mail;
    const mailBody = this.state.message;
    sendMail({ mail, mailBody });
    alert("Mail sent!");
    // if (sendMail(this.state.mail, this.state.message)) alert("Mail sent!");
    // else alert("There was an error :(");

    event.preventDefault();
  }

  render() {
    return (
      <div style={{ flexDirection: "column" }}>
        <form onSubmit={this.handleSubmit}>
          <h2 style={{ marginTop: "30px" }}>Contact Me</h2>
          <p>Enter your mail:</p>

          <input
            type="email"
            required
            value={this.state.value}
            onChange={this.handleChangeMail}
          />
          <p>Enter your message:</p>
          <input
            type="text"
            required
            value={this.state.value}
            onChange={this.handleChangeMessage}
          />
          <div style={{ position: "relative", marginTop: "10px" }}>
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="default"
              startIcon={<EmailIcon />}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NameForm;
//ReactDOM.render(<NameForm />, document.getElementById("root"));
