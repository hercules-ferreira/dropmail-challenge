export function NavItem({ title, emailCount, icon: Icon, isBold }) {
  return (
    <a
      href=""
      className="flex items-center justify-center sm:justify-start gap-3 rounded-lg py-2 hover:bg-blue-50"
    >
      <Icon className="h-4 w-5 text-zinc-500" />
      <div className="w-full hidden sm:flex items-center">
        <span
          className={`flex-grow text-zinc-700 group-hover:text-blue-500 ${
            isBold ? "font-bold" : "font-medium"
          }`}
        >
          {title}
        </span>
        <div className="ml-2 font-bold text-blue-600 group-hover:text-blue-500">
          {emailCount}
        </div>
      </div>
    </a>
  );
}
