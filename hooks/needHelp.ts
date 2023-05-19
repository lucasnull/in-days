import React from "react";
import { useRecoilState } from "recoil";
import { FOOTER_VISIBILITY } from "../atoms/needHelp";

export function useNeedHelp() {
  const [visibilities, setVisibilities] = useRecoilState(FOOTER_VISIBILITY);
  const setContactVisibility = (visibility: boolean) => setVisibilities({ isContactVisible: visibility });
  const setSolutionsVisibility = (visibility: boolean) => setVisibilities({ isSolutionsVisible: visibility });

  const shouldBeVisible = React.useMemo(() => {
    const { isContactVisible, isSolutionsAlreadySeen } = visibilities;
    return Boolean(isSolutionsAlreadySeen && !isContactVisible);
  }, [visibilities]);

  return {
    setSolutionsVisibility,
    setContactVisibility,
    shouldBeVisible,
  };
}
