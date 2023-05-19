import React from "react";
import Image from "next/image";
import { useLocale } from "../../hooks/locale";
import { useSectionsRefs } from "../../hooks/refs";
import { useNeedHelp } from "../../hooks/needHelp";
import { useIsInViewport } from "../../hooks/viewport";
import styles from "../../styles/Solutions.module.scss";
import { renderServiceItems } from "./helpers/renderServiceItems";

const Solutions: React.FC = () => {
  const { strings } = useLocale("home");
  const { registerRef } = useSectionsRefs();

  const ref = React.useRef<HTMLElement>(null);
  const { isIntersecting } = useIsInViewport(ref);
  const { setSolutionsVisibility } = useNeedHelp();

  React.useEffect(() => {
    setSolutionsVisibility(isIntersecting);
  }, [isIntersecting]);

  React.useEffect(() => {
    registerRef("solutions", ref);
  }, [ref]);

  return (
    <article ref={ref} itemScope itemProp="solutions" className={styles.solutions}>
      <div className="solutions--content-container">
        <div className="solutions--content-texts">
          <h3 itemProp="title" className="section-title">
            {strings.blocks.solutions.title}
          </h3>

          <p>{strings.blocks.solutions.subtitle}</p>

          <ul itemScope itemType="https://schema.org/ItemList" itemProp="serviceList" className="solutions--services">
            {renderServiceItems(strings.blocks.solutions.items)}
          </ul>
        </div>

        <div className="solutions--content-image">
          <Image
            fill
            quality={100}
            loading="lazy"
            itemProp="icon"
            objectFit="cover"
            src="/assets/solutions.jpg"
            alt={strings.blocks.solutions.title}
            sizes="(max-width: 850px) 90vw, 20vw"
          />
        </div>
      </div>
    </article>
  );
};

export default Solutions;
