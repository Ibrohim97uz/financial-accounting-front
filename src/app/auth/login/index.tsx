import useApiMutation from "@/app/hooks/useApiMutation";
import LoginForm from "./_components/LoginForm";
import { useEffect } from "react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  return (
    <div className="bg-charcoal h-screen w-screen overflow-hidden flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-3xl mb-2">{t("Kirish")}</h1>
      <LoginForm />
      <LanguageSwitcher />
    </div>
  );
}

export default Login;
