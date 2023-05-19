import { atom, selector } from "recoil";

const BASE_SECTION_REF_BUCKET = atom<App.SectionRef[]>({
  key: "baseSectionRefBucket",
  default: [],
  dangerouslyAllowMutability: true,
});

export const SECTION_REF_BUCKET = selector<App.SectionRef[]>({
  key: "sectionRefBucket",
  dangerouslyAllowMutability: true,
  get: ({ get }) => get(BASE_SECTION_REF_BUCKET),
  set: ({ get, set }, _newRef) => {
    const newRef = _newRef as any[];
    const oldRefs = get(BASE_SECTION_REF_BUCKET);
    const filteredOldRefs = oldRefs.filter((ref) => ref.key !== newRef[0].key);
    const newRefs = [...filteredOldRefs, ...(newRef as any)];
    set(BASE_SECTION_REF_BUCKET, newRefs);
  },
});
