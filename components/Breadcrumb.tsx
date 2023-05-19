import { useRouter } from "next/router";
import style from "../styles/Breadcrumb.module.scss";
import { getLocaleStrings, getRouteConfig } from "../hooks/locale";

export const Breadcrumb: React.FC<Breadcrumb.Props> = ({ pages }) => {
  const { locale } = useRouter();

  const renderItem = (page: any, index: number) => {
    const config = getRouteConfig(page, locale);
    const strings = getLocaleStrings(page, locale);

    return (
      <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
        <a itemProp="item" href={`/${config.localizedRoute}`}>
          <span itemProp="name">{strings.page.key}</span>
          <meta itemProp="position" content="1" />
        </a>
      </li>
    );
  };

  return (
    <ol itemScope itemType="https://schema.org/BreadcrumbList" className={style.breadcrumb}>
      {pages.map(renderItem)}
    </ol>
  );
};
