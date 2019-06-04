import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";


import "./landingPage.css";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
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
          style={{ color: "green" }}
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
        <h1 className="title">Opening Soon</h1>

        <p className="main-text">
          {" "}
          Passionné par la crypto et tu veux en faire ton <br /> métier ?  Alors
          inscris-toi à notre mailing list pour <br /> être le 1er informé du lancement
          d’OnChainJobs !
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
      </div>
    );
  }
}

export default Form;
