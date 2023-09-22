import React, { Component } from "react";
import axios from "axios";
import { AutoEmailCheckerButton } from "./AutoEmailCheckerButton";
import { ManualEmailCheckerButton } from "./ManualEmailCheckerButton";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { ButtonRefresh } from "../../styles/components/ui/Button/ButtonRefresh";
import { ButtonCheck } from "../../styles/components/ui/Button/ButtonRefreshStyles";
import { LiSubject } from "./EmailGeneratorStyles";


export class EmailGenerator extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      sessionInfo: null,
      receivedEmails: null,
      selectedEmailIndex: -1,
      autoCheckInterval: null,
    };
  }

  updateSessionInfo = (id, expiresAt, email) => {
    this.setState({ sessionInfo: { id, expiresAt, email } });
  };

  // Função para gerar um e-mail temporário.
  // Busca token de autenticação no .env.
  generateEmail = () => {
    const token = process.env.REACT_APP_TOKEN;

    // Monta a URL da API GraphQL e o URL de um serviço de proxy.
    const apiUrl = `https://dropmail.me/api/graphql/${token}`;
    const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

    // Faz uma solicitação POST para a API GraphQL para gerar o e-mail temporário.
    axios
      .post(corsAnywhereUrl + apiUrl, {
        query: `
          mutation {
            introduceSession {
              id,
              expiresAt,
              addresses {
                address
              }
            }
          }
        `,
      })
      .then((response) => {
        const { id, expiresAt, addresses } =
          response.data.data.introduceSession;
        const email = addresses[0].address;

        // Salvar informações da sessão no localStorage.
        // Essas informações não são perdidas, se a página é atualizada ou quando o usuário a fecha e abre novamente.
        this.saveSessionInfo(id, expiresAt, email);

        this.setState({ email, sessionInfo: { id, expiresAt, email } });
      })
      .catch((error) => {
        console.error("Erro ao gerar o endereço de e-mail temporário:", error);
      });
  };

  // Função para verificar e-mails recebidos.
  checkReceivedEmails = () => {
    if (this.state.sessionInfo) {
      const token = process.env.REACT_APP_TOKEN;

      // Monta a URL da API GraphQL e o URL de um serviço de proxy.
      const apiUrl = `https://dropmail.me/api/graphql/${token}`;
      const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

      // Faz uma solicitação POST para a API GraphQL para buscar e-mails recebidos.
      axios
        .post(corsAnywhereUrl + apiUrl, {
          query: `
            query {
              session(id: "${this.state.sessionInfo.id}") {
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
          this.setState({
            receivedEmails,
            selectedEmailIndex:
              receivedEmails.length > 0 ? receivedEmails.length - 1 : -1,
          });
        })
        .catch((error) => {
          console.error("Erro ao verificar e-mails recebidos:", error);
        });
    }
  };

  // Função para iniciar a verificação automática de e-mails.
  startAutoCheck = () => {
    const interval = setInterval(() => {
      this.checkReceivedEmails();
      this.showNotification();
    }, 15000); 

    // Armazena o intervalo no estado para poder pará-lo posteriormente.
    this.setState({ autoCheckInterval: interval });
  };

  // Função para parar a verificação automática de e-mails quando clicada.
  stopAutoCheck = () => {
    clearInterval(this.state.autoCheckInterval);
    this.setState({ autoCheckInterval: null });
  };

  // Função para exibir uma notificação, na área de trabalho, ou onde o usuário estiver com a tela.
  showNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          this.createNotification();
        }
      });
    } else {
      this.createNotification();
    }
  };
  
  createNotification = () => {
    new Notification("Verificação de E-mails", {
      body: "Verificando e-mails se há novos e-mails.",
      icon: "icon.png",
    });
  }; 

  // Função para salvar informações da sessão no localStorage.
  // Essas informações não são perdidas, se a página é atualizada ou quando o usuário a fecha e abre novamente.
  saveSessionInfo = (id, expiresAt, email) => {
    const sessionInfo = JSON.stringify({ id, expiresAt, email });
    localStorage.setItem("sessionInfo", sessionInfo);
  };

  // Renderização do componente.
  render() {
    return (
      // Container principal com grade CSS
      <main className="min-h-screen grid gap-1.5 md:gap-3 grid-cols-[auto_1fr] sm:grid-cols-[250px_4fr] md:grid-cols-[1fr_4fr] grid-rows-[120px_1fr] overflow-hidden">
        {/* Renderiza o componente Header */}
        <Header />
        {/* Renderiza o componente Sidebar */}
        <Sidebar />
        {/* Container principal */}
        <div className="pr-3">
          {/* Renderiza o componente ButtonRefresh */}
          <ButtonRefresh
            email={this.state.email}
            generateTemporaryEmail={this.generateEmail}
            sessionInfo={this.state.sessionInfo}
          />

          {/* Container de botões */}
          <div className="text-center">
            {/* Condicionalmente renderiza o componente AutoEmailCheckerButton ou o botão de início de verificação automática */}
            {this.state.autoCheckInterval ? (
              <AutoEmailCheckerButton
                onStartAutoCheck={this.startAutoCheck}
                onStopAutoCheck={this.stopAutoCheck}
              />
            ) : (
              <ButtonCheck onClick={this.startAutoCheck}>
                {" "}
                Iniciar Verificação Automática
              </ButtonCheck>
            )}
            {/* Renderiza o componente ManualEmailCheckerButton */}
            <ButtonCheck>
              <ManualEmailCheckerButton
                onManualCheckEmails={this.checkReceivedEmails}
              />
            </ButtonCheck>
          </div>

          {/* Container principal para exibição de e-mails */}
          <main className="bg-white h-full rounded-lg w-full col-span-2">
            {/* Container flexível */}
            <div className="w-full my-3 flex h-full flex gap-1">
              {/* Coluna esquerda com lista de e-mails */}
              <div className="bg-e8edf3 border-r-2 rounded-s-lg h-full ">
                {/* Container para o cabeçalho da lista de e-mails */}
                <div >
                  <div>
                    {/* Título "Inbox" */}
                    <h2 className="text-start m-2 px-14 py-2 text-lg font-bold outline-none text-slate-900">
                      Inbox
                    </h2>
                  </div>
                  {/* Condicionalmente renderiza a lista de e-mails recebidos se existirem */}
                  {this.state.receivedEmails && (
                    <div>
                      <div>
                        <ul className="">
                          {/* Mapeia e renderiza cada e-mail recebido como um item de lista */}
                          {this.state.receivedEmails.map((email, index) => (
                            <LiSubject
                              key={index}
                              index={index}
                              onClick={() =>
                                this.setState({ selectedEmailIndex: index })
                              }
                            >
                              {/* E-mail de assunto */}
                              <h2 className="text-lg font-semibold outline-none text-slate-700">
                                {email.headerSubject}
                              </h2>
                            </LiSubject>
                          ))}
                        </ul>
                      </div>
                      <div></div>
                    </div>
                  )}
                </div>
              </div>
              {/* Coluna direita para exibir o conteúdo do e-mail selecionado */}
              <div className="w-full flex flex-grow flex-col border-r-2 rounded-s-lg h-full">
                <div className="bg-e8edf3  rounded-e-lg ">
                  <div className="m-5 flex-row px-4 py-2 outline-none  "></div>
                </div>
                {/* Condicionalmente renderiza a lista de e-mails recebidos se existirem */}
                {this.state.receivedEmails && (
                  <div>
                    <div>
                      <ul>
                        {/* Mapeia e renderiza cada e-mail recebido como um item de lista com fundo colorido */}
                        {this.state.receivedEmails.map((email, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              this.setState({ selectedEmailIndex: index })
                            }
                          >
                            <div></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      {this.state.receivedEmails && (
                        <div>
                          <div>
                            <ul>
                              {/* Mapeia e renderiza cada e-mail recebido como um item de lista com borda e fundo colorido */}
                              {this.state.receivedEmails.map((email, index) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    this.setState({ selectedEmailIndex: index })
                                  }
                                ></li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            {/* Renderiza o conteúdo do e-mail selecionado, se houver um selecionado */}
                            {this.state.selectedEmailIndex !== -1 && (
                              <div>
                                {/* E-mail de conteúdo */}
                                <h2 className="m-2 px-4 py-2 text-lg font-semibold outline-none inline-block">
                                  {
                                    this.state.receivedEmails[
                                      this.state.selectedEmailIndex
                                    ].text
                                  }
                                </h2>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </main>
    );
  }
}
