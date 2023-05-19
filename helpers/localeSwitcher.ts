export function localeSwitcher<T>(locales: Record<string, T>) {
  return (locale = "pt-BR") => {
    return locales[locale];
  };
}
