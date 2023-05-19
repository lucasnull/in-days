import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { getRouteConfig } from "../../../hooks/locale";
import { useSectionsScroll } from "../../../hooks/pageScroll";

interface Props {
  items: Header.MenuItem[];
  isMobileCollapsed: boolean;
  collapseMobile: () => void;
}

export const HeaderLinks: React.FC<Props> = (props) => {
  const { scrollTo } = useSectionsScroll();
  const { locale, defaultLocale } = useRouter();
  const { items, isMobileCollapsed, collapseMobile } = props;
  const pageLocale = locale || defaultLocale;

  const generateClassList = () => {
    const collapsedClass = isMobileCollapsed ? "header--menu__collapsed" : "";
    return `header--menu ${collapsedClass}`;
  };

  const goTo = (area: string) => {
    return () => {
      scrollTo(area);
      collapseMobile();
    };
  };

  const renderMenuItems = (): React.ReactNode =>
    items.map((item) => {
      const uniqueKey = uuid();
      const { label, action, type } = item;

      if (type === "link") {
        const { localizedRoute } = getRouteConfig(action as any, pageLocale!);

        return (
          <div key={uniqueKey} itemProp="item">
            <Link href={`/${localizedRoute}`} itemProp="name" className="header--menu-item">
              {label}
            </Link>
          </div>
        );
      }

      return (
        <div key={uniqueKey} itemProp="item">
          <a href={`#${action}`} itemProp="name" className="header--menu-item" onClick={goTo(action)}>
            {label}
          </a>
        </div>
      );
    });

  return (
    <div className={generateClassList()}>
      <div className="header--menu--backdrop" onClick={collapseMobile} />

      <nav itemScope itemType="https://schema.org/SiteNavigationElement">
        {renderMenuItems()}
      </nav>
    </div>
  );
};
