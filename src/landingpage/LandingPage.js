import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";


import "./landingPage.css";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div className="main-div">
      {status === "sending" && <div style={{ color: "blue" }}>Envoie...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
        className="success-message"
          style={{ color: "green"}}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <br />
      <input
      className="email-input"
        ref={node => (email = node)}
        type="email"
        placeholder="Adresse email.."
      />
      <br />
      <button className="subscribe-button" onClick={submit}>
       <span className="button-text">M'informer</span> 
      </button>
    </div>
  );
};

class Form extends Component {
  render() {
    const url =
      "https://appliedtechnology.us20.list-manage.com/subscribe/post?u=991ea9ef9cee7e5687536a72f&amp;id=c075dafca4";
    return (
      <div>
        <h1 className="title">Décollage Imminent</h1>

        <p className="main-text">
          {" "}
          Tu es passionné par l’univers de la blockchain<br /> et des cryptomonnaies et tu souhaites en faire ton métier ?<br /> Inscrits toi à notre mailing list pour être le premier informé <br /> du lancement de OnChainJobs et recevoir en avant-première <br /> notre tout premier article !
        </p>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
        <span className="spams">* Nous détestons les spams </span>
      </div>
    );
  }
}

export default Form;
