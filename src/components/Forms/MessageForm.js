import React, { Component } from "react";
import Button from "components/CustomButtons/Button.js";
import EmailIcon from "@material-ui/icons/Email";
import { sendMail } from "../../api/sendMessage";

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
    if (sendMail({ mail: this.state.mail, mailBody: this.state.message }))
      alert("Mail sent!");
    else alert("There was an error :(");
    this.setState({ mail: "", message: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <h2 style={{ marginTop: "20px" }}>
            {this.props.language == "spanish" ? "Contactame" : "Contact Me"}
          </h2>

          <p>
            {this.props.language == "spanish"
              ? "Ingresa tu email: "
              : "Enter your email:"}
          </p>

          <input
            style={{ width: "35%" }}
            type="email"
            required
            value={this.state.mail}
            onChange={this.handleChangeMail}
          />
          <p style={{ marginTop: "10px" }}>
            {this.props.language == "spanish"
              ? "Ingresa tu mensaje: "
              : "Enter your message:"}
          </p>
          <textarea
            style={{ width: "35%", height: "65px" }}
            value={this.state.message}
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
              {this.props.language == "spanish"
                ? "Enviar Mensaje"
                : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NameForm;
//ReactDOM.render(<NameForm />, document.getElementById("root"));
