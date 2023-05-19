import React from "react";
import Image from "next/image";
import { useLocale } from "../../../hooks/locale";

export const SocialIcons: React.FC = () => {
  const { strings } = useLocale("footer");

  return (
    <menu itemScope itemProp="socialMediaLinks" className="footer--social-media-links">
      <li itemProp="socialMediaLink">
        <a href="https://github.com/s1mbi0se" target="_blank" rel="nofollow" itemProp="link">
          <Image
            width={24}
            height={24}
            quality={100}
            loading="lazy"
            itemProp="icon"
            src="/assets/github.webp"
            alt={strings.socialMediaLinks.alts.github}
          />
        </a>
      </li>

      <li itemProp="socialMediaLink">
        <a href="https://www.linkedin.com/company/simbioseventures" target="_blank" rel="nofollow" itemProp="link">
          <Image
            width={24}
            height={24}
            quality={100}
            loading="lazy"
            itemProp="icon"
            src="/assets/linkedin.webp"
            alt={strings.socialMediaLinks.alts.linkedin}
          />
        </a>
      </li>
    </menu>
  );
};
