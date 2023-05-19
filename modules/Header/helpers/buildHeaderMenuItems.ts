export const buildHeaderMenuItems = (menu: any): Header.MenuItem[] => {
  return [
    {
      label: menu.howWeWork,
      action: "howWeWork",
      type: "link",
    },
    // {
    //   label: menu.blog,
    //   action: "blog",
    //   type: "link",
    // },
    {
      label: menu.contact,
      action: "contact",
      type: "action",
    },
  ];
};
