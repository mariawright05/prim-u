import { useState, useEffect } from "react";

// Converts the absolute width into breakpoints
function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 480) {
      return "xsm";
    } else if (windowWidth < 769) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else {
      return "lg";
    }
  } else {
    return undefined;
  }
}

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient
      ? getBreakPoint(window.innerWidth)
      : undefined
  );

  useEffect(() => {
    // Called when screen is resized
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth));
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;