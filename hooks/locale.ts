import { LocalesMap, RoutesMap } from "../i18n";
import { useRouter } from "next/router";

export function useLocale(page: keyof typeof LocalesMap) {
  const { locale, defaultLocale } = useRouter();

  function getLocale() {
    return locale || defaultLocale || "pt-BR";
  }

  function getStrings() {
    return LocalesMap[page][getLocale()];
  }

  return {
    strings: getStrings(),
    locale: getLocale(),
  };
}

export function getLocaleStrings(page: keyof typeof LocalesMap, locale = "pt-BR") {
  return LocalesMap[page][locale];
}

export function useRouteConfig(page: keyof typeof RoutesMap) {
  const { locale, defaultLocale } = useRouter();

  function getLocale() {
    return locale || defaultLocale || "pt-BR";
  }

  function getLocalizedRoute() {
    const locale = getLocale();
    const route = RoutesMap[page][locale];

    return locale === "pt-BR" ? route : `${locale}/${route}`;
  }

  return {
    localizedRoute: getLocalizedRoute(),
    alternates: RoutesMap[page],
  };
}

export function getRouteConfig(page: keyof typeof RoutesMap, locale = "pt-BR") {
  function getLocalizedRoute() {
    const route = RoutesMap[page][locale];
    return locale === "pt-BR" ? route : `${locale}/${route}`;
  }

  return {
    localizedRoute: getLocalizedRoute(),
    alternates: RoutesMap[page],
  };
}
