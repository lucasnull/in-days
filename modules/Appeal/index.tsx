import React from "react";
import { useLocale } from "../../hooks/locale";
import { Button } from "../../components/Button";
import styles from "../../styles/Appeal.module.scss";
import { useSectionsScroll } from "../../hooks/pageScroll";
import Image from "next/image";

const Appeal: React.FC = () => {
  const { strings } = useLocale("home");
  const { scrollToContact } = useSectionsScroll();

  return (
    <section itemScope className={styles.appeal}>
      <div className="appeal--content-container">
        <div className="appeal--content-image">
          <Image
            fill
            quality={100}
            itemProp="icon"
            objectFit="cover"
            src="/assets/consulting.jpg"
            alt={strings.blocks.solutions.title}
            sizes="(max-width: 850px) 90vw, 20vw"
          />
        </div>

        <div className="appeal--content-texts">
          <h3 itemProp="title" className="section-title">
            {strings.blocks.appeal.title}
          </h3>

          <p itemProp="description">{strings.blocks.appeal.description}</p>

          <Button onClick={scrollToContact} variant="secondary" itemProp="contactButton">
            {strings.blocks.appeal.action}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Appeal;
