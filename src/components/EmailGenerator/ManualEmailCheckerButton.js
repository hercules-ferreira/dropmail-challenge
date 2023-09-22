// Essa função é um button que dispara a verificação de de e-mail novos de forma manual.
// Quando clicada ela atualiza a tela e renderiza os novos emails.

import React from "react";

export const ManualEmailCheckerButton = ({ onManualCheckEmails }) => {
  return (
    <button onClick={onManualCheckEmails}>
      Iniciar Verificação Manualmente
    </button>
  );
};
