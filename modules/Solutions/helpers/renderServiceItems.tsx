import Image from "next/image";
import { v4 as uuid } from "uuid";

export const renderServiceItems = (items: any[]): React.ReactNode => {
  return items.map((item) => {
    const { label, icon } = item;
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement" itemScope itemType="https://schema.org/Service">
        <Image
          width={32}
          alt={icon}
          height={32}
          quality={100}
          loading="lazy"
          itemProp="icon"
          src={`/assets/solutions/${icon}.svg`}
        />

        <span>{label}</span>
      </li>
    );
  });
};
