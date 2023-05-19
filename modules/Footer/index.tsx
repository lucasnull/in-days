import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Footer.module.scss";
import { FooterLinks } from "./components/FooterLinks";
import { SocialIcons } from "./components/SocialIcons";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { buildFooterMenuItems } from "./helpers/buildFooterMenuItems";
import { LanguagesLinks } from "./components/LanguagesLinks";

const Footer: React.FC = () => {
  const { strings } = useLocale("footer");
  const menuItems = buildFooterMenuItems(strings.menus);

  return (
    <footer itemScope itemProp="footer" className={styles.footer}>
      <div className="footer--content-container">
        <article itemScope itemProp="about" className="footer--about-container">
          <p className="title" itemProp="title">
            {strings.title}
          </p>

          {renderParagraphs(strings.paragraphs)}
        </article>

        <FooterLinks items={menuItems} />
        <SocialIcons />
        <LanguagesLinks />
      </div>
    </footer>
  );
};

export default Footer;
