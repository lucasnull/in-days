import Image from "next/image";
import { v4 as uuid } from "uuid";

export const renderToolList = (tools: Record<any, any>[]): React.ReactNode => {
  return tools.map((tool) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement">
        <section itemProp="iconContainer">
          <Image
            width={35}
            height={35}
            quality={100}
            loading="lazy"
            itemProp="icon"
            alt={tool.imageKey}
            src={`/assets/tools/${tool.imageKey}.webp`}
          />
        </section>

        {tool.label}
      </li>
    );
  });
};
