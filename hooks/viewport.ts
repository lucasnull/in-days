import React from "react";

export function useIsInViewport(ref: React.RefObject<any>) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const observer = React.useMemo(() => {
    if (typeof IntersectionObserver !== "undefined") {
      return new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }

    return null;
  }, []);

  React.useEffect(() => {
    if (observer && ref.current) {
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref, observer]);

  return { isIntersecting };
}
