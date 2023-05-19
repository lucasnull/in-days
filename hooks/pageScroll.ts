import { useRecoilState } from "recoil";
import { IS_PAGE_SCROLL_ENABLED } from "../atoms/pageScroll";
import { useSectionsRefs } from "./refs";

export function usePageScroll() {
  const [isPageScrollEnabled, setIsPageScrollEnabled] = useRecoilState(IS_PAGE_SCROLL_ENABLED);

  return {
    isPageScrollEnabled,
    blockScroll: () => setIsPageScrollEnabled(false),
    unblockScroll: () => setIsPageScrollEnabled(true),
  };
}

export function useSectionsScroll() {
  const { refs } = useSectionsRefs();

  const scrollTo = (area: string) => {
    const matchedRef = refs.find((ref) => ref.key === area);
    matchedRef?.ref.current?.scrollIntoView();
  };

  return {
    scrollTo,
    scrollToContactForm: () => scrollTo("contact-form"),
    scrollToHowWeWork: () => scrollTo("how-we-work"),
    scrollToSolutions: () => scrollTo("solutions"),
    scrollToContact: () => scrollTo("contact"),
  };
}
