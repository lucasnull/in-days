import { atom, AtomEffect } from "recoil";
const BLOCKED_BODY_CLASSNAME = "scroll-blocked";

const toggleScrollEffect: AtomEffect<boolean> = ({ onSet }) => {
  onSet((isPageScrollEnabled) => {
    const body = document.querySelector("body");

    if (isPageScrollEnabled) body?.classList.remove(BLOCKED_BODY_CLASSNAME);
    else body?.classList.add(BLOCKED_BODY_CLASSNAME);
  });
};

export const IS_PAGE_SCROLL_ENABLED = atom<boolean>({
  key: "isPageScrollEnabled",
  default: true,
  effects: [toggleScrollEffect],
});
