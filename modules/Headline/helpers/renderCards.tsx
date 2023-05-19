import Image from "next/image";
import { v4 as uuid } from "uuid";

export const renderCards = (cards: Headline.Card[]): React.ReactNode => {
  return cards.map((card) => {
    const uniqueKey = uuid();

    return (
      <article itemScope itemProp="strength" key={uniqueKey} className={card.className}>
        <div className="card--container">
          <Image
            width={24}
            height={24}
            quality={100}
            itemProp="icon"
            alt={card.iconKey}
            src={`/assets/cards/${card.iconKey}.webp`}
          />
          {card.label}
        </div>
      </article>
    );
  });
};
