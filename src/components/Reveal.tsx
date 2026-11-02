import {
  createElement,
  type ElementType,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

type RevealProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & {
  className?: string;
  delay?: number;
  as?: ElementType;
}>;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref: elementRef,
      ...props,
      className: `reveal ${className}`,
      style: {
        ...style,
        "--reveal-delay": `${delay}ms`,
      } as CSSProperties,
    },
    children,
  );
}
