import { v4 as uuid } from "uuid";

interface Props {
  items: Footer.MenuItem[];
}

export const FooterLinks: React.FC<Props> = ({ items }) => {
  const renderMenuItems = (): React.ReactNode =>
    items.map((item) => {
      const uniqueKey = uuid();
      const { link, label } = item;

      return (
        <li itemProp="externalLink" key={uniqueKey}>
          <a rel="external" href={link} target="_blank" itemProp="link">
            {label}
          </a>
        </li>
      );
    });

  return (
    <ul itemScope itemProp="externalLinks" className="footer--external-links">
      {renderMenuItems()}
    </ul>
  );
};
