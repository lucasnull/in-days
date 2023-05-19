import { atom, selector } from "recoil";

interface Visibilities {
  isContactVisible?: boolean;
  isSolutionsVisible?: boolean;
  isSolutionsAlreadySeen?: boolean;
}

const BASE_FOOTER_VISIBILITY = atom<Visibilities>({
  key: "baseFooterVisibility",
  default: {},
});

export const FOOTER_VISIBILITY = selector({
  key: "footerVisibility",
  get: ({ get }) => get(BASE_FOOTER_VISIBILITY),
  set: ({ get, set }, _newData) => {
    const newData = _newData as Visibilities;
    const oldData = get(BASE_FOOTER_VISIBILITY);

    set(BASE_FOOTER_VISIBILITY, {
      ...oldData,
      ...newData,

      // when solutions section is seen at first time,  this property is marked as true, then never changes again
      isSolutionsAlreadySeen: oldData.isSolutionsAlreadySeen || oldData.isSolutionsVisible,
    });
  },
});
