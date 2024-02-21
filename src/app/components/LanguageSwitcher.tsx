import { useTranslation } from "react-i18next";
import SvgIcon from "./SvgIcon";
import uz from "@/assets/svg/uz.svg";
import ru from "@/assets/svg/ru.svg";
import en from "@/assets/svg/en.svg";
import { useDispatch } from "react-redux";
import { changeLanguage } from "@/_features/i18nSlice";
import { cn } from "@/lib/utils";

function LanguageSwitcher({ className }: Components.ILanguageSwitcher) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (lng: Features.LanguageList) => () => {
    i18n.changeLanguage(lng);
    dispatch(changeLanguage({ language: lng }));
    window.localStorage.setItem("locale", lng);
  };

  return (
    <div className={cn("select-none", className)}>
      <SvgIcon
        onClick={handleLanguageChange("uz")}
        svg={uz}
        className="h-5 w-8 overflow-hidden inline-block"
      />
      <SvgIcon
        onClick={handleLanguageChange("ru")}
        svg={ru}
        className="h-5 w-8 overflow-hidden inline-block mx-3"
      />
      <SvgIcon
        onClick={handleLanguageChange("en")}
        svg={en}
        className="h-5 w-8 overflow-hidden inline-block"
      />
    </div>
  );
}

export default LanguageSwitcher;
