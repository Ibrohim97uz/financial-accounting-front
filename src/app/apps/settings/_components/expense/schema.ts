import i18n from "../../../../../../i18n";
import * as yup from "yup";

const expenseCategorySchema = yup.object().shape({
  name: yup.string().required(i18n.t("Ushbu maydon majburiy")),
});

export default expenseCategorySchema;
