import { useEffect, useRef, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

const initialPosition: CursorPosition = { x: -100, y: -100 };

function getHoverTarget(target: EventTarget | null) {
  return target instanceof Element ? target.closest(".hover-target") : null;
}

export default function CustomCursor() {
  const [position, setPosition] = useState(initialPosition);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const targetPosition = useRef(initialPosition);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateDeviceType = () => setIsTouchDevice(mediaQuery.matches);
    updateDeviceType();
    mediaQuery.addEventListener("change", updateDeviceType);

    const animate = () => {
      const target = targetPosition.current;
      setPosition((current) => ({
        x: current.x + (target.x - current.x) * 0.18,
        y: current.y + (target.y - current.y) * 0.18,
      }));
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    const handlePointerMove = (event: PointerEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      setIsHovering(Boolean(getHoverTarget(event.target)));
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        setIsHovering(false);
        return;
      }

      setIsHovering(Boolean(getHoverTarget(event.relatedTarget)));
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceType);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      <div
        className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/25 blur-3xl transition-transform duration-300 ease-out"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 mix-blend-difference transition-[height,width,background-color] duration-300 ease-out ${
          isHovering
            ? "h-6 w-6 bg-white/90"
            : "h-3 w-3 bg-white"
        }`}
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
