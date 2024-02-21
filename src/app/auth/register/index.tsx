import { useTranslation } from "react-i18next";
import RegisterForm from "./_components/RegisterForm";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

function Register() {
  const { t } = useTranslation();
  return (
    <div className="bg-charcoal h-screen w-screen overflow-hidden flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-3xl mb-2">{t("Ro'yxatdan o'tish")}</h1>
      <RegisterForm />
      <LanguageSwitcher />
    </div>
  );
}

export default Register;
