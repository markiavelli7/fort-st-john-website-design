import { useState, useMemo } from "react";

export function useHover() {
  var [isHovered, setIsHovered] = useState(false);
  var bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    };
  }, []);

  return [isHovered, bind];
}
