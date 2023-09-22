// Esse componente é o botão que dispara a verificação se há e-mails novos, de acordo com o tempo pré-estabelecido.
// Se houver e-mail novos  ele renderiza na tela, o assunto do email, e o assunto.

import React, { useState, useEffect } from "react";
import { Div1, CircleButton } from "./AutoEmailCheckerButtonStyled";
import { ButtonCheck } from "../../styles/components/ui/Button/ButtonRefreshStyles";

export const AutoEmailCheckerButton = ({
  onStartAutoCheck,
  onStopAutoCheck,
}) => {
  const [countdown, setCountdown] = useState(15); // Tempo em segundos (=x minutos)
  const [stopRotation, setStopRotation] = useState(false);

  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      onStartAutoCheck(); // Inicia a verificação automática
      setCountdown(15); // Reinicia o contador para x minutos quando chegar a 0
    }

    return () => clearInterval(interval);
  }, [countdown, onStartAutoCheck]);

  const handleStopRotation = () => {
    setStopRotation(true);
    onStopAutoCheck();
  };

  return (
    <Div1>
      <CircleButton onClick={handleStopRotation} stopRotation={stopRotation}>
        {countdown}
      </CircleButton>

      <div>
        <ButtonCheck onClick={handleStopRotation} stopRotation={stopRotation}>
          <p>Click aqui e pare a verificação automática</p>
        </ButtonCheck>
      </div>
    </Div1>
  );
};
