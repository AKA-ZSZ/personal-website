import { useEffect, useState } from "react";

export default function useMobile() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isBrowser = typeof window !== "undefined";
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
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
