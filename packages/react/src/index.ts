'use client';
import { useEffect, useCallback, useState, Ref } from 'react';

const useWheresMyCursor = (ref: Ref<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleResize = useCallback(() => {
    const target = ref?.current;
    if (target == undefined) return;
    const rect = target.getBoundingClientRect();
    setTargetPosition({ x: rect.x + rect.width * 0.5, y: rect.y + rect.height * 0.5 });
  }, [ref]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);
      window.addEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const offset = { x: targetPosition.x - mousePosition.x, y: targetPosition.y - mousePosition.y };
  const radians =
    Math.atan2(mousePosition.x - targetPosition.x, mousePosition.y - targetPosition.y) * -1;
  const degrees = radians * (180 / Math.PI);
  return {
    offset,
    cursorPosition: mousePosition,
    targetPosition,
    angle: {
      degrees,
      radians,
    },
  };
};

export { useWheresMyCursor };
