import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useSize: () => WindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const windowSizeHandler = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", windowSizeHandler);

    return (): void => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
