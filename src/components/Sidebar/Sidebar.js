// Esse é o componente do Sidebar (menu localizado a direita)
// É um modelo de uma parte da tela de um e-mail tradicional  

import {
  ChevronDown,
  Inbox,
  SendHorizontal,
  Clock,
  Folders,
  CheckSquare,
  FolderPlus,
  Cog,
  Flag,
  LifeBuoy,
  SquareStack,
  Trash2,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UseSpaceWidget";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 bg-white p-1 md:p-5 h-full rounded-se-2xl">
      <nav className="space-y-0.5  ">
        <i
          data-icon-name="ChevronDownRegular"
          aria-hidden="true"
          class="ms-Button-icon jgnYx cXhO1 LPIso Izlfm flipForRtl icon-275"
        ></i>
        <div className="flex items center gap-2 justify-center sm:justify-start">
          <img src="./images/SVG/icon-mail.svg" alt="Ícone de e-mail" />
          <span className="text-lg font-extrabold hidden sm:inline">Inbox</span>
        </div>
        <NavItem title="Favoritos" icon={ChevronDown} isBold={true} />

        <NavItem title="Caixa de Entrada" icon={Inbox} emailCount={1} />
        <NavItem title="Hercules" icon={Folders} emailCount={2} />
        <NavItem title="Gerência" icon={FolderPlus} emailCount={1} />
        <NavItem title="Projetos" icon={Flag} emailCount={3} />
        <NavItem title="Pastas" icon={ChevronDown} isBold={true} />

        <NavItem title="Caixa de Entrada" icon={Inbox} emailCount={1} />
        <NavItem title="Lixo Eletrônico" icon={SquareStack} emailCount={""} />
        <NavItem title="Rascunhos" icon={CheckSquare} />
        <NavItem title="Itens Enviados" icon={SendHorizontal} />
        <NavItem title="Scheduled" icon={Clock} />
        <NavItem title="Itens Excluídos" icon={Trash2} emailCount={2} />
      </nav>

      <div className="mt-auto flex-col gap-1">
        <nav>
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
      </div>

      <div className="mb-auto bg-z-200">
        <Profile />
      </div>
    </aside>
  );
};
