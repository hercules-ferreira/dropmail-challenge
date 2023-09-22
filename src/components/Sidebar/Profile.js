import React from "react";
import { LogOut } from "lucide-react";
import { Button } from "./Button";

export const ProfileProps = {};

export function Profile() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <img
        src="https:/github.com/hercules-ferreira.png"
        className="w-8 h-8 md:w-20 md:h-20 rounded-full"
        alt="avatar"
      />

      <div className="hidden md:flex flex-col truncate">
        <span className="mt-3 text-sm font-semibold text-zinc-700">
          Hercules Ferreira Ribeiro
        </span>
        <span className=" text-sm font-semibold text-zinc-500  ">
          herculesholiveira@hotmail.com
        </span>
        <span className="text-xs font-semibold text-zinc-500 ">
          11 948490988
        </span>
      </div>
      <Button variant="ghost" className="">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  );
}
