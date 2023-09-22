// Esse componente faz verificação se há e-mails novos.
// Ele faz uso do Token de verificação localizado no env.REACT_APP_TOKEN;.

import React, { Component } from "react";
import axios from "axios";

export class EmailChecker extends Component {
  componentDidMount() {
    this.checkReceivedEmails();
  }

  checkReceivedEmails = () => {
    const { sessionInfo } = this.props;
    const token = process.env.REACT_APP_TOKEN;

    if (sessionInfo) {
      const apiUrl = `https://dropmail.me/api/graphql/${token}`;
      const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

      axios
        .post(corsAnywhereUrl + apiUrl, {
          query: `
            query {
              session(id: "${sessionInfo.id}") {
                mails {
                  rawSize
                  fromAddr
                  toAddr
                  downloadUrl
                  text
                  headerSubject
                }
              }
            }
          `,
        })
        .then((response) => {
          const receivedEmails = response.data.data.session.mails;
          this.props.onReceivedEmails(receivedEmails);
        })
        .catch((error) => {
          console.error("Erro ao verificar e-mails recebidos:", error);
        });
    }
  };

  render() {
    return null;
  }
}
