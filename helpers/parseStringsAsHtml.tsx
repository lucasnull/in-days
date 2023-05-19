import _ from "lodash";
import htmlParser from "html-react-parser";
type LocalizationValue = Record<string, any> | string | Array<string | Record<string, any>>;

const recursiveParser = (entry: LocalizationValue): any => {
  if (typeof entry === "string") return htmlParser(entry);
  if (Array.isArray(entry)) return entry.map(recursiveParser);
  return parseStringsAsHtml(entry);
};

export const parseStringsAsHtml = (strings: Record<string, any>) => {
  return _.mapValues(strings, recursiveParser) as any;
};
