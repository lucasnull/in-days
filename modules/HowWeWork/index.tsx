import React from "react";
import Image from "next/image";
import { useLocale } from "../../hooks/locale";
import { SquadBlock } from "./components/SquadBlock";
import styles from "../../styles/HowWeWork.module.scss";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { renderTimelineSteps } from "./helpers/renderTimelineSteps";

const HowWeWork: React.FC = () => {
  const { strings } = useLocale("howWeWork");

  return (
    <article itemScope itemProp="howWeWork" className={styles.howWeWork}>
      <div className="howWeWork--content-container">
        <h1 itemProp="title" className="section-title">
          {strings.title}
        </h1>

        <h2 itemProp="subtitle" className="section-subtitle">
          {strings.subtitle}
        </h2>

        <figure itemScope itemProp="cover" className="section-cover">
          <Image
            layout="fill"
            quality={100}
            loading="eager"
            itemProp="image"
            objectFit="cover"
            alt={strings.title}
            src="/assets/working-table.webp"
          />
        </figure>

        <hr className="section-divider" />

        {/* Consulting */}
        {renderParagraphs(strings.consulting.paragraphs)}

        <section itemScope itemProp="timeline" className="howWeWork--timeline orange">
          <ol itemProp="stepList" itemType="https://schema.org/ItemList">
            {renderTimelineSteps(strings.consulting.processTimeline)}
          </ol>
        </section>
        {/* ******************* */}

        {/* Development */}
        {renderParagraphs(strings.development.paragraphs)}

        <section itemScope itemProp="timeline" className="howWeWork--timeline green">
          <ol itemProp="stepList" itemType="https://schema.org/ItemList">
            {renderTimelineSteps(strings.development.processTimeline)}
          </ol>
        </section>

        <SquadBlock />
        {/* ******************* */}
      </div>
    </article>
  );
};

export default HowWeWork;
