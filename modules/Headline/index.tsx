import React from "react";
import { useLocale } from "../../hooks/locale";
import { Button } from "../../components/Button";
import { renderCards } from "./helpers/renderCards";
import styles from "../../styles/Headline.module.scss";
import { useSectionsScroll } from "../../hooks/pageScroll";
import { buildHeadlineCards } from "./helpers/buildHeadlineCards";
import { useActionWord } from "./hooks/action-word";

const Headline: React.FC = () => {
  const { strings } = useLocale("home");
  const { scrollToContact } = useSectionsScroll();
  const word = useActionWord(strings.blocks.headline.words);
  const cards = buildHeadlineCards(strings.blocks.headline.cards);

  return (
    <article itemScope itemProp="copywrite" className={styles.headline}>
      <div className="headline--content-container">
        <header itemScope itemProp="headline">
          <h1 itemProp="merit">{strings.blocks.headline.title}</h1>

          <span>
            <Button onClick={scrollToContact} variant="primary" type="button" itemProp="form">
              {strings.blocks.headline.action}

              <span className="button--animation">
                <span className="word">{word}</span>
                <span className="carret">_</span>
              </span>
            </Button>
          </span>
        </header>

        <aside itemScope itemProp="strengths">
          <div className="strengths--left-col">{renderCards(cards.slice(0, 2))}</div>
          <div className="strengths--right-col">{renderCards(cards.slice(2))}</div>
        </aside>
      </div>
    </article>
  );
};

export default Headline;
