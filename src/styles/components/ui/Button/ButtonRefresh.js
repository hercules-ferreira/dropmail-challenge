import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

import {
  Container,
  Text,
  InputNew,
  InputContent,
  CopyIcon,
  CopyIconText,
  CopyText,
  RefreshContainer,
  RefreshEmail,
  RefreshText,
  Alert,
} from "./ButtonRefreshStyles";
import { EmailInfo } from "../../../../components/EmailGenerator/EmailInfo";

export const ButtonRefresh = ({
  email,
  generateTemporaryEmail,
  sessionInfo,
}) => {
  const [copied, setCopied] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Mostra uma mensagem na tela, quando o usuário tentar copiar o e-mail temporário, mas  inda não foi gerado.
  // Copie o email para a área de transferência
  const handleCopyClick = () => {
    if (email) {
      // Copie o email para a área de transferência
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      });
    } else {
      setShowAlert(true); 
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <Container>
      <Text onClick={generateTemporaryEmail}>Your temporary email address</Text>
      <div className="flex flex-1 flex-col gap-6">
        <InputNew className="mx-1 w-auto">
          <input
            type="text"
            placeholder="Seu email será gerado aqui!"
            value={email}
            readOnly
          />
          <InputContent>
            <CopyIcon>
              <MdOutlineContentCopy size={22} onClick={handleCopyClick} />
            </CopyIcon>
            <CopyIconText>
              <CopyText
                onClick={handleCopyClick}
                disabled={!email || copied}
                data-testid="copy-button" 
              >
                {copied ? "Copiado!" : "Copy"}
              </CopyText>
            </CopyIconText>
          </InputContent>
        </InputNew>
      </div>
      {/* Button para gerar email temporário sempre que o usuário clicar */}
      <RefreshContainer>
        <RefreshEmail>
          <RefreshText onClick={generateTemporaryEmail}>Refresh</RefreshText>
        </RefreshEmail>
      </RefreshContainer>
      {sessionInfo && (
        <EmailInfo sessionInfo={sessionInfo} /> 
      )}
      {showAlert && (
        <Alert>Clique em Refresh primeiro para copiar o email!</Alert>
      )}
    </Container>
  );
};

