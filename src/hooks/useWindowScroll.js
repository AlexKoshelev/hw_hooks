import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll((p) => ({
          x: Math.round(window.scrollX),
          y: Math.round(window.scrollY),
        }))
      );
      return () => {
        window.removeEventListener("scroll", () =>
          setScroll((p) => ({
            x: Math.round(window.scrollX),
            y: Math.round(window.scrollY),
          }))
        );
      };
    }
  });
  function scrollTo(params) {
    console.log(params.y);
    if (typeof window !== "undefined") {
      window.scrollTo(params.x, params.y);
      setScroll({ x: 0, y: 0 });
    }
  }
  return [scroll, scrollTo];
}
