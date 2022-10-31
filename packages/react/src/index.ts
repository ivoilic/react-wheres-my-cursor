import { useEffect, useCallback, useState, RefObject } from 'react';
import { proxy, useSnapshot, subscribe } from 'valtio';

// Shared State
const state = proxy({ cursorPosition: { x: 0, y: 0 }, i: 1 });

//Shared Event Handlers
const handleResize = () => {
  ++state.i;
};
const handleMouseMove = (e: MouseEvent) => {
  state.cursorPosition = { x: e.clientX, y: e.clientY };
};

// Shared Event Listeners
if (typeof window != 'undefined') {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleResize);
}

/**
 * Get the relative angle and position of the cursor
 * @param ref
 * @returns
 */
export const useWheresMyCursor = (ref: RefObject<HTMLElement | null>) => {
  const { cursorPosition, i } = useSnapshot(state);
  let targetPosition = { x: 0, y: 0 };

  if (ref?.current != undefined) {
    const rect = ref?.current.getBoundingClientRect();
    targetPosition = { x: rect.x + rect.width * 0.5, y: rect.y + rect.height * 0.5 };
  }

  const positionDelta = {
    x: targetPosition.x - cursorPosition.x,
    y: targetPosition.y - cursorPosition.y,
  };
  const radians =
    Math.atan2(cursorPosition.x - targetPosition.x, cursorPosition.y - targetPosition.y) * -1;
  const degrees = radians * (180 / Math.PI);

  return {
    positionDelta,
    cursorPosition,
    targetPosition,
    angle: {
      degrees,
      radians,
    },
  };
};
