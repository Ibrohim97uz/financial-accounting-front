import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Logo({ menuOpen }: Menu.ILogo) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={cn("flex items-center cursor-pointer")}
    >
      <img className="h-8 w-8" src={logo} alt="logo" />
      {menuOpen && <h1 className="ml-2 text-2xl">{t("Welcome")}</h1>}
    </div>
  );
}

export default Logo;
