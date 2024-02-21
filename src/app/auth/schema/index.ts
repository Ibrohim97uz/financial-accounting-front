import i18n from "../../../../i18n";
import * as yup from "yup";

const authSchema = yup.object().shape({
  login: yup
    .string()
    .required(i18n.t("Ushbu maydon majburiy"))
    .min(6, i18n.t("Kamida 6 ta belgi bo'lishi shart!")),
  password: yup.string().required(i18n.t("Ushbu maydon majburiy")),
});

export default authSchema;
