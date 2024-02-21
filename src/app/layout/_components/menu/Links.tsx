import { cn } from "@/lib/utils";
import { Home, Import, Settings, Upload } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "i18next";

function Links({ menuOpen }: Menu.ILinks) {
  const navigate = useNavigate();
  const location = useLocation();
  const links: Array<Menu.Pages.IPages> = [
    {
      name: i18n.t("Asosiy"),
      icon: <Home className="h-5 w-5 text-teal" />,
      link: "/",
      type: "child",
    },
    {
      name: i18n.t("Daromadlar"),
      icon: <Import className="h-5 w-5 text-teal" />,
      link: "/income",
      type: "child",
    },
    {
      name: i18n.t("Xarajatlar"),
      icon: <Upload className="h-5 w-5 text-teal" />,
      link: "/expense",
      type: "child",
    },
    {
      name: i18n.t("Sozlamalar"),
      icon: <Settings className="h-5 w-5 text-teal" />,
      link: "/settings",
      type: "child",
    },
  ];

  return (
    <ul className={cn("p-3 flex flex-col gap-3")}>
      {links.map((item, id) => (
        <abbr
          title={item.name}
          key={id}
          className={cn(
            "flex gap-4 text-[15px] px-2 py-3 rounded-md border border-transparent transition-all cursor-pointer no-underline group ",
            "hover:bg-white hover:border hover:border-primary hover:text-primary",
            location.pathname === item.link && "text-teal border-teal",
            !menuOpen && "w-max self-end"
          )}
          onClick={() => navigate(item.link)}
        >
          {item.icon}
          {menuOpen && (
            <span
              className="group-hover:text-charcoal"
              style={{ textWrap: "nowrap" }}
            >
              {item.name}
            </span>
          )}
        </abbr>
      ))}
    </ul>
  );
}

export default Links;
