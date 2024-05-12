/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useLayoutEffect, useRef } from "react";

const isBrowser: boolean = typeof window !== `undefined`;

interface Position {
  x: number;
  y: number;
}

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: React.RefObject<HTMLElement>;
  useWindow?: boolean;
}): Position {
  if (!isBrowser) return { x: 0, y: 0 };

  const target: HTMLElement = element?.current || document.body;
  const position: ClientRect | DOMRect = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: (props: { prevPos: Position; currPos: Position }) => void,
  deps: DependencyList,
  element?: React.RefObject<HTMLElement>,
  useWindow?: boolean,
  wait?: number
): void {
  const position = useRef(getScrollPosition({ useWindow }));
  const throttleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const callBack = (): void => {
    const currPos: Position = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleScroll = (): void => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current !== null) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, deps);
}
