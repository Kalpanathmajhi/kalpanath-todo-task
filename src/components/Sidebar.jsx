import { BookCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  return (
    <aside className="h-screen w-full">
      <nav className="h-full flex-col bg-gray-900 border-r shadow-sm">
        <div
          className="flex items-center gap-1 p-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <BookCheck size={30} className="text-teal-400" />
          <span className="ml-4 font-semibold text-white text-xl">
            Todo Task
          </span>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}

const checkPath = (path) => {
  return path === location.pathname;
};

export function SidebarItem({ icon, text, active, path }) {
  active = checkPath(path);
  const navigate = useNavigate();
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-teal-500 to-teal-400 text-white"
            : "hover:bg-teal-700 text-gray-300"
        }
    `}
      onClick={() => navigate(path)}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${"w-52 ml-3"}`}>
        {text}
      </span>
    </li>
  );
}
