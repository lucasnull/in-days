export const LanguagesLinks: React.FC = () => {
  return (
    <ul itemScope itemProp="languagesLinks" className="footer--languages-links">
      <li itemProp="languageLink">
        <a rel="alternate" hrefLang="pt-BR" href="https://indays.app/pt-BR" itemProp="link">
          Português (Brasil)
        </a>
      </li>

      <li itemProp="languageLink">
        <a rel="alternate" hrefLang="en" href="https://indays.app/en" itemProp="link">
          English
        </a>
      </li>
    </ul>
  );
};
