import React from "react";

export const UsedSpaceWidgetProps = {};

export function UsedSpaceWidget(props) {
  return (
    <div className="hidden md:flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-5 dark:bg-zinc-300">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-blue-700 dark:text-zinc-900">
          Used space
        </span>
        <span className="text-sm leading-5 text-blue-500 dark:text-zinc-700">
          Your team has used 20% of your available space. Need more?
        </span>
      </div>

      <div className="h-2 rounded-full bg-blue-100 dark:bg-zinc-600">
        <div className="h-2 w-1/4 rounded-full bg-blue-600 dark:bg-blue-400" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm font-medium text-blue-500 dark:text-blue-900"
        >
          Dismiss
        </button>

        <button
          type="button"
          className="text-sm font-medium text-blue-700 dark:text-blue-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
