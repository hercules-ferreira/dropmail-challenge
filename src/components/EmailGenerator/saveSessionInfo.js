// SessionInfo.js

import React, { Component } from "react";

export class SessionInfo extends Component {
  componentDidMount() {
    // Verifique se há informações da sessão no localStorage
    const sessionData = localStorage.getItem("sessionInfo");

    // Se houver informações da sessão, atualize o estado com essas informações
    if (sessionData) {
      const { id, expiresAt, email } = JSON.parse(sessionData);
      this.props.updateSessionInfo(id, expiresAt, email);
    }
  }

  render() {
    return null;
  }
}

export default SessionInfo;
