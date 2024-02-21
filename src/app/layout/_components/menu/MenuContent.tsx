import { cn } from "@/lib/utils";
import Logo from "./Logo";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Links from "./Links";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

function MenuContent({ handleLogout, open, handleToggleMenu }: any) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <header className={cn("p-5", !open && "px-2")}>
          <div
            className={cn(
              "flex justify-between  pb-6",
              open ? "border-b-2" : "justify-end"
            )}
          >
            <Logo menuOpen={open} />
          </div>
        </header>

        <LanguageSwitcher className="block text-center" />
        <Links menuOpen={open} />
      </div>
      <div className={cn("px-3", !open && "self-end")}>
        <Button
          onClick={handleLogout}
          className={cn(
            "w-full bg-inherit flex justify-start gap-2 mb-5 group",
            !open && "w-max px-2"
          )}
        >
          <LogOut className="h-5 w-5 group-hover:text-charcoal" />
          {open && (
            <span className="group-hover:text-charcoal">{t("Chiqish")}</span>
          )}
        </Button>
      </div>
      <div
        onClick={() => {
          handleToggleMenu();
        }}
        className={cn(
          "cursor-pointer absolute bottom-48 right-0 translate-x-1/2 z-10 rounded-full border p-1 flex items-center justify-center bg-white text-primary",
          "hover:border-primary"
        )}
      >
        {!open ? (
          <ChevronRight className="h-5 w-5 text-charcoal" />
        ) : (
          <ChevronLeft className="h-5 w-5 text-charcoal" />
        )}
      </div>
    </>
  );
}

export default MenuContent;
