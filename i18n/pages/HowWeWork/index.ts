import enUS from "./en.json";
import ptBR from "./pt-BR.json";
import { parseStringsAsHtml } from "../../helpers/parseStringsAsHtml";

const Locales: Record<string, typeof ptBR> = {
  "pt-BR": parseStringsAsHtml(ptBR),
  en: parseStringsAsHtml(enUS),
};

export default Locales;
