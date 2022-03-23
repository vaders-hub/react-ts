import { useEffect, useRef, useState } from "react";

const usePrevious = (value: number): any => {
  const ref: any = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useShape = (): any => {
  const [shape, setShape] = useState("square");
  const [dimension, setDimension]: any = useState({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    const { height, width } = dimension;

    setShape(height === width ? "square" : "react");
    return () => {
      console.log("unmount useShape");
    };
  }, [dimension, dimension.height, dimension.width]);

  return [shape, setDimension];
};

export { usePrevious, useShape };
