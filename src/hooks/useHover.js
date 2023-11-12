import { useEffect, useRef, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (typeof ref.current !== "undefined") {
      ref.current.addEventListener("mouseenter", () => {
        setHovered(true);
      });
      ref.current.addEventListener("mouseout", () => {
        setHovered(false);
      });
    }
  }, [hovered]);
  return { hovered, ref };
}
