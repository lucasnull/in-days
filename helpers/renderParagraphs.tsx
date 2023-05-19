import { v4 as uuid } from "uuid";

export const renderParagraphs = (paragraphs: string[], className?: string): React.ReactNode => {
  const mapParagraphs = (paragraph: string) => {
    const uniqueKey = uuid();

    return (
      <p className={className} key={uniqueKey}>
        {paragraph}
      </p>
    );
  };

  return paragraphs.map(mapParagraphs);
};
