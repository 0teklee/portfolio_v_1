import { useState, useEffect } from "react";

interface IWindow {
  width: number | string;
}

const getWindowDimensions = (): IWindow => {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return { width };
  }
  return { width: 720 };
};

const useWindowDimensions = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export default useWindowDimensions;
