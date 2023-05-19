import React from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { useLocale } from "../../../hooks/locale";

const SQUAD_CONFIG = [
  { label: "PM", count: 1 },
  { label: "UI/UX", count: 1 },
  { label: "Mobile", count: 2 },
  { label: "Backend", count: 1 },
];

export const SquadBlock: React.FC = () => {
  const { strings } = useLocale("howWeWork");

  const renderSquadConfig = () => {
    return SQUAD_CONFIG.map((squadMember) => {
      const uniqueKey = uuid();

      return (
        <li key={uniqueKey} itemProp="itemListElement">
          <span>
            <Image
              width={50}
              height={57}
              quality={100}
              loading="lazy"
              itemProp="icon"
              src="/assets/human-silhouette.webp"
              alt={strings.development.squad.iconAlt}
            />
            <span itemProp="count">{squadMember.count}</span>
          </span>
          {squadMember.label}
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <p itemProp="description">{strings.development.squad.description}</p>

      <figure itemScope itemProp="figure" className="howWeWork--squad-figure">
        <ol itemProp="squadFormation" itemType="https://schema.org/ItemList">
          {renderSquadConfig()}
        </ol>

        <figcaption itemProp="caption">{strings.development.squad.caption}</figcaption>
      </figure>
    </React.Fragment>
  );
};
