import { useEffect, useState } from "react";

export default function useMobile() {
  const isBrowser = typeof window !== "undefined";
  let windowWidth = 0;
  if (isBrowser) {
    windowWidth = window.innerWidth;
  }
  const [width, setWidth] = useState<number>(windowWidth);

  function handleWindowSizeChange() {
    setWidth(windowWidth);
  }
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);
  const isMobile = width <= 768;
  return isMobile;
}
