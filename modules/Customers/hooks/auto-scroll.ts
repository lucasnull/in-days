import React from "react";
import { useRecoilValue } from "recoil";
import { asyncInterval } from "./../../../helpers/tick";
import { IS_PAGE_SCROLL_ENABLED } from "../../../atoms/pageScroll";

export const useAutoScroll = (ref: any) => {
  const [reverse, setReverse] = React.useState(true);
  const [interrupted, setInterrupted] = React.useState(false);
  const isPageScrollEnabled = useRecoilValue(IS_PAGE_SCROLL_ENABLED);
  const [maxScrollLeft, setMaxScrollLeft] = React.useState<number>();
  const [currentPosition, setCurrentPosition] = React.useState<number>();

  // when the component is being mounted, we need to trigger the init fn
  React.useEffect(() => {
    if (ref.current) initAutoScrolling(ref.current.getElement());
  }, [ref]);

  // when maxscroll is set, we need to init the current position
  React.useEffect(() => {
    if (ref.current && maxScrollLeft) setCurrentPosition(0);
  }, [ref, maxScrollLeft]);

  // this effect watches the position changing then triggrer the scroll fn
  React.useEffect(() => {
    if (interrupted || !isPageScrollEnabled) {
      return;
    }

    if (ref.current && currentPosition !== undefined) {
      scrollAction(ref.current.getElement());
    }
  }, [isPageScrollEnabled, reverse, interrupted, ref, currentPosition]);

  // just set the max scroll
  function initAutoScrolling(element: HTMLDivElement) {
    const maxScrollLeftCalc = (element.scrollWidth - element.clientWidth) * 3;
    setMaxScrollLeft(maxScrollLeftCalc);
  }

  // the scroll action
  async function scrollAction(element: HTMLDivElement) {
    const newPosition = reverse ? currentPosition! - 1 : currentPosition! + 1;
    const canScroll = reverse ? newPosition > 0 : newPosition < maxScrollLeft!;

    if (canScroll) {
      await asyncInterval(() => {
        setCurrentPosition(newPosition);
        element.scrollTo({ left: newPosition / 3 });
      }, 5);
    } else {
      setReverse(!reverse);
    }
  }

  // interrupt the auto scrolling
  function interrupt() {
    setInterrupted(true);
    setCurrentPosition(undefined);
  }

  // re enable the auto scrolling
  function enable() {
    const element = ref.current.getElement();
    setCurrentPosition(element.scrollLeft * 3);
    setInterrupted(false);
  }

  return {
    interrupt,
    enable,
  };
};
