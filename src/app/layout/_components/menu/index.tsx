import { useCallback, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import Links from "./Links";
import { Button } from "@/components/ui/button";
import QueryHook from "@/app/hooks/queryHook";
import { useDispatch, useSelector } from "react-redux";
import { logout as Logout } from "@/app/auth/_features/authSlice";
import {
  handleMenuClose,
  handleMenuOpen,
  toggleMenu,
} from "../../_features/menuSlice";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

function useMenu() {
  const { t } = useTranslation();
  const { open } = useSelector((state: any) => state.menu.value);

  const dispatch = useDispatch();

  const handleCloseMenu = useCallback(() => {
    dispatch(handleMenuClose());
  }, []);

  const handleOpenMenu = useCallback(() => {
    dispatch(handleMenuOpen());
  }, []);
  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("login");
    dispatch(Logout());
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.code === "BracketLeft") {
      handleCloseMenu();
    }
    if (event.code === "BracketRight") {
      handleOpenMenu();
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);
  const { navigate } = QueryHook();

  const menu = useMemo(
    () => (
      <div
        className={cn(
          "w-[300px] h-full transition-all p-2",
          "md:absolute md:z-50 md:bg-charcoal",
          open ? "ml-0" : "-ml-[225px] md:-ml-[300px] "
        )}
      >
        <div
          className={cn(
            "border-4 border-spacing-1 h-full w-full rounded-lg border-silver flex flex-col justify-between relative"
          )}
        >
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
                <span className="group-hover:text-charcoal">
                  {t("Chiqish")}
                </span>
              )}
            </Button>
          </div>
          <div
            onClick={() => {
              handleToggleMenu();
            }}
            className={cn(
              "cursor-pointer absolute bottom-48 right-0 translate-x-1/2 z-10 rounded-full border p-1 flex items-center justify-center bg-white text-primary",
              "hover:border-primary",
              "md:bottom-auto md:-right-[30px]"
            )}
          >
            {!open ? (
              <ChevronRight className="h-5 w-5 text-charcoal" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-charcoal" />
            )}
          </div>
        </div>
      </div>
    ),
    [open]
  );
  return { handleOpenMenu, menu, open };
}

export default useMenu;
