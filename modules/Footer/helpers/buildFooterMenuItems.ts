export const buildFooterMenuItems = (menus: any): Footer.MenuItem[] => {
  return [
    {
      label: menus.about,
      link: "https://docs.simbioseventures.com/#/public/about",
    },
    {
      label: menus.mission,
      link: "https://docs.simbioseventures.com/#/public/mission-premisses-values",
    },
    {
      label: menus.dream,
      link: "https://docs.simbioseventures.com/#/public/dream",
    },
  ];
};
