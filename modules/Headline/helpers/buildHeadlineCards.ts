export const buildHeadlineCards = (cards: any): Headline.Card[] => {
  return [
    {
      label: cards.first,
      iconKey: "rocket",
      className: "black-green",
    },
    {
      label: cards.second,
      iconKey: "heart",
      className: "yellow",
    },
    {
      label: cards.third,
      iconKey: "handshake",
      className: "green",
    },
    {
      label: cards.fourth,
      iconKey: "runner",
      className: "black-yellow",
    },
  ];
};
