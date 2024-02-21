import i18n from "../../../../i18n";
import * as yup from "yup";

const expenseSchema = yup.object().shape({
  category: yup.string().required(i18n.t("Ushbu maydon majburiy")),
  price: yup
    .number()
    .nullable()
    .required(i18n.t("Ushbu maydon majburiy"))
    .typeError(i18n.t("Ushbu maydon majburiy")),
  date: yup.string().required(i18n.t("Ushbu maydon majburiy")),
  comment: yup.string(),
});

export default expenseSchema;
