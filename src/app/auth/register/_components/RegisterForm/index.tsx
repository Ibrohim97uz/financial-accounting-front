import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import ErrorMessage from "@/components/ui/error-message";
import { cn } from "@/lib/utils";
import useApiMutation from "@/app/hooks/useApiMutation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import registerSchema from "../../../schema";
import LoadingPage from "@/app/components/LoadingPage";
import { addTokenToAxios } from "@/services/api/api";
import { login } from "@/app/auth/_features/authSlice";
import { useDispatch } from "react-redux";
import Password from "../../../_components/Password";
import Login from "../../../_components/Login";
import { useTranslation } from "react-i18next";

function RegisterForm() {
  const { t } = useTranslation();
  const { mutateAsync, isPending } = useApiMutation(`/auth/register`, "post");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const { handleSubmit, setError, clearErrors } = methods;
  const serverError = useRef<string | null>();

  const onSubmit = (data: InferType<typeof registerSchema>) => {
    const payload = {
      login: data.login,
      password: data.password,
    };

    mutateAsync(payload)
      .then((response) => {
        addTokenToAxios(response.data?.access_token);
        dispatch(
          login({
            ...response.data,
            isLogged: true,
          })
        );
        navigate("/");
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          setError("login", {
            message: t("Ushbu login band, iltimos boshqa login kiriting"),
          });
          serverError.current = "";
        } else {
          clearErrors("login");
          serverError.current = t("Server bilan bog'lanishda xatolik");
        }
      });
  };

  return (
    <FormProvider {...methods}>
      {isPending && <LoadingPage />}
      <form
        className={cn("p-5 border border-white rounded-lg")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cn("flex gap-5", "sm:flex-col")}>
          <Login />
          <Password />
        </div>

        <div className="flex items-center justify-between gap-5 mt-7">
          <ErrorMessage
            className="whitespace-nowrap justify-self-start"
            error={serverError.current!}
          />
          <div>
            <Button type="submit">{t("Ro’yhatdan o’tish")}</Button>
          </div>
        </div>
        <p className="text-silver text-center">
          {t("Avval ro'yxatdan o'tganmisiz?")}{" "}
          <span
            onClick={() => navigate("login")}
            className="text-teal underline cursor-pointer select-none"
          >
            {t("Kirish")}
          </span>
        </p>
      </form>
    </FormProvider>
  );
}
export default RegisterForm;
