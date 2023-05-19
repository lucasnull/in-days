import { useRecoilState } from "recoil";
import { SECTION_REF_BUCKET } from "../atoms/sectionRefBucket";

export const useSectionsRefs = () => {
  const [refs, _registerRef] = useRecoilState(SECTION_REF_BUCKET);
  const registerRef = (key: string, ref: React.RefObject<HTMLElement>) => _registerRef([{ key, ref }]);

  return {
    refs,
    registerRef,
  };
};
