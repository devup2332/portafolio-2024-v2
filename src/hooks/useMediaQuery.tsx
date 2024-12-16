import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatch(media.matches);
    listener();
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, []);
  return match;
};

export default useMediaQuery;
