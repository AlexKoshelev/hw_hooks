import { useEffect, useState } from "react";

export function useViewportSize() {
  const [width, setWidth] = useState(window.screen.width);
  const [height, setHeight] = useState(window.screen.height);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWidth(window.screen.width);
      });
      window.addEventListener("resize", () => {
        setHeight(window.screen.height);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setHeight(window.screen.height);
          setWidth(window.screen.width);
        });
      };
    }
  }, []);

  return { width, height };
}
