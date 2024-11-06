import { RefObject, useEffect, useState } from "react";

const useElementVisible = (ref: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isVisible;
};

export default useElementVisible;
